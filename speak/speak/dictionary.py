from pprint import pprint

from pywiktionary import Wiktionary
import random

wikt = Wiktionary(XSAMPA=True)


def load_wordlist(path):
    """
    Load wordlist by path

    :param path:
    :return:
    """

    with open(path, "rb") as f:
        r = f.read()
        r = r.decode(encoding="utf-8")
    return r.split("\n")


WL = load_wordlist("wordlist.txt")


def random_word():
    """
    Pick a random word

    :return:
    """

    ix = random.randint(0, len(WL))

    return WL[ix]




if __name__ == '__main__':
    # word = wikt.lookup("dictionary")
    # pprint(word)
    for i in range(10):
        print(random_word())
