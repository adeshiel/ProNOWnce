from pprint import pprint

from pywiktionary import Wiktionary

wikt = Wiktionary(XSAMPA=True)

if __name__ == '__main__':
    word = wikt.lookup("dictionary")
    pprint(word)
