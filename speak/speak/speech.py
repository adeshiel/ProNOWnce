"""
Dealing with Amazon's speech synthesis API
"""
import logging

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
        response = polly.synthesize_speech(TextType="ssml",
                                           Text=ssml,
                                           OutputFormat="mp3",
                                           VoiceId="Joanna")
        return response
    except (BotoCoreError, ClientError) as error:
        # The service returned an error, exit gracefully
        l.error(error)
        return


class Word:
    """
    A word to be pronounce
    """

    def __init__(self, word):
        """
        Create a new word

        :param str word: a word in English
        """
        pass
