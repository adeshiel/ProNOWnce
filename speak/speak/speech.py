"""
Dealing with Amazon's speech synthesis API
"""
import logging

import random
from boto3 import Session
from botocore.exceptions import BotoCoreError, ClientError
from contextlib import closing
import os
import sys
import subprocess
from tempfile import gettempdir

l = logging.getLogger(__name__)

session = Session()
polly = session.client("polly")


def polly_req(ssml):
    """
    Send request to Amazon's server

    :param str ssml: the ssml to be send
    :return: response from the Amazon's server
    """

    try:
        # Request speech synthesis
        l.debug("Requesting polly for %s", ssml)

        response = polly.synthesize_speech(TextType="ssml",
                                           Text=ssml,
                                           OutputFormat="mp3",
                                           VoiceId="Joanna")
        return response
    except (BotoCoreError, ClientError) as error:
        # The service returned an error, exit gracefully
        l.error(error)
        return


def save_pron(res, filename):
    """
    Save the audiostream to file

    :param res:
    :param filename:
    :return: path to the file saved
    """

    # Make sure the path exist
    dirpath = os.path.join(os.getcwd(), "prons")
    if not os.path.exists(dirpath):
        l.info("Creating folder %s" % dirpath)
        os.mkdir(dirpath)

    with closing(res["AudioStream"]) as stream:

        output = os.path.join(os.getcwd(), "prons", "{filename}.mp3".format(filename=filename))
        l.debug("Saving %s", filename)
        l.debug("Data %s", res)
        try:
            # Open a file for writing the output as a binary stream
            with open(output, "wb") as file:
                file.write(stream.read())
                return output
        except IOError as error:
            # Could not write to file, exit gracefully
            l.error("Can't write file %s", filename)
            sys.exit(-1)


class Word:
    """
    A word to be pronounce
    """

    def __init__(self, word):
        """
        Create a new word

        :param str word: a word in English
        """
        self.word = word
        self.path = []

    def speak(self):
        """
        Generate a pronunciation

        :return:
        """
        res = polly_req(f"<speak>{self.word}</speak>")
        self.path.append(save_pron(res, filename=self.word))
        return self.path

    def messup(self):
        """
        Generate three weird speech pattern

        :return:
        """

        res = polly_req(f"<speak>{vowel_rem(self.word)}</speak>")
        self.path.append(save_pron(res, filename=self.word + "-a"))

        res = polly_req(f"<speak>{vowel_rem(self.word)}</speak>")
        self.path.append(save_pron(res, filename=self.word + "-b"))

        res = polly_req(f"<speak>{vowel_rem(self.word)}</speak>")
        self.path.append(save_pron(res, filename=self.word + "-c"))

        return self.path


def vowel_rem(word):
    """
    Replace vowels in the word

    :param word:
    :return:
    """
    r = ""
    for c in word:
        if c in "aeiou":
            r += random.choice("aeiou".replace(c, ""))
        else:
            r += c
    return r


if __name__ == '__main__':
    print(vowel_rem("antidistablishmentarianism"))
