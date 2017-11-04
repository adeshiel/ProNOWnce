"""
WebAPI to connect with the other part of the app. 
Expose ability through the Amazon API
"""
import logging

import random
from flask import Flask, jsonify, send_from_directory

from dict import random_word
from speech import Word

app = Flask(__name__, static_url_path='')
l = logging.getLogger(__name__)


@app.route("/pron/<word>")
def pron(word):
    """
    Get the link to the mp3 that has the pronunciation of the word

    :param word:
    :return:
    """

    return send_from_directory('prons', word + ".mp3", mimetype="audio/mpeg")


@app.route('/word')
def word():
    """
    Return a random word and four different pronunciation.

    :return:
    """

    word = Word(random_word())
    # word = Word("arroyo")

    word.speak()
    word.messup()
    l.debug("Displaying %s", word.word)

    prons = sorted([word.word, word.word + "-a", word.word + "-b", word.word + "-c"], key=lambda x: random.random())

    return jsonify({"word": word.word, "pron": prons, "correct": prons.index(word.word)})


if __name__ == '__main__':
    logging.basicConfig(format='[%(asctime)s][%(levelname)s]: %(message)s',
                        level=logging.INFO)
    app.run(debug=True, host="0.0.0.0")
