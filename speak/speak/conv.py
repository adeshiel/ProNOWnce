"""
Convert between different transcription table

Why can't there be a library to do this already ?

We will store the table as tuples of row. The correspondence of the phoneme was hand-coded according to the
conversion table and the spec of CMU-dict. This was made solely for converting from CMU-dict to Amazon version of IPA
and X-SAMPA

More information:
- [CMU-dict](http://www.speech.cs.cmu.edu/cgi-bin/cmudict)
- [Amazon conversion table]()

"""
K = {"cmu": 0, "ipa": 1, "xsampa": 2}

CONSONANTS = [
    ("B", "b", "b"),
    ("CH", "t͡ʃ", "tS"),
    ("D", "d", "d"),
    ("DH", "ð", "D"),
    ("F", "f", "f"),
    ("G", "g", "g"),
    ("HH", "h", "h"),
    ("JH", "d͡ʒ", "dZ"),
    ("K", "k", "k"),
    ("L", "l", "l"),
    ("M", "m", "m"),
    ("N", "n", "n"),
    ("NG", "ŋ", "N"),
    ("P", "p", "p"),
    ("R", "ɹ", "r\\"),
    ("S", "s", "s"),
    ("SH", "ʃ", "S"),
    ("T", "t", "t"),
    ("TH", "Θ", "T"),
    ("V", "v", "v"),
    ("W", "w", "w"),
    ("Y", "j", "j"),
    ("Z", "z", "z"),
    ("ZH", "ʒ", "Z"),
]
VOWELS = [
    ("AA", "ɑ", "A"),
    ("AE", "æ", "{"),
    ("AH", "ʌ", "V"),
    ("AO", "ɔ", "O"),
    ("AW", "aʊ", "aU"),
    ("AY", "aɪ", "aI"),
    ("EH", "ɛ", "E"),
    ("ER", "ɝ", "3'"),
    ("EY", "eɪ", "eI"),
    ("IH", "ɪ", "I"),
    ("IY", "i:", "i"),
    ("OW", "oʊ", "oU"),
    ("OY", "ɔɪ", "OI"),
    ("UH", "ʊ", "U"),
    ("UW", "u", "u"),
]


def conv(phs, fr, to):
    """
    Convert a list of ph

    Support for fr/to: xsampa, ipa, cmu

    :param list phs: A list of strings in the system you would like to convert.
    :param str fr: The origin system
    :param str to: The result system
    :return:
    """
    try:
        return [
            find_tup(CONSONANTS + VOWELS, K[fr], ph)[K[to]] for ph in phs
        ]
    except ValueError as e:
        return ""


def find_tup(tups, col, val):
    """
    Assume we have the table structure tuple, find a value

    :param tups:
    :param col:
    :param val:
    :return:
    """

    for x in tups:
        if x[col] == val:
            return x
    raise ValueError("Can't find val in the list of tuples")
    # return ""


def clean_stress(phs):
    return ["".join([p for p in ph if p not in "0123456789"]) for ph in phs]


if __name__ == '__main__':
    test_phs = ['D', 'IH1', 'K', 'SH', 'AH0', 'N', 'EH2', 'R', 'IY0']
    test_phs = clean_stress(test_phs)
    print(test_phs)
    print("".join(conv(test_phs, "cmu", "xsampa")))
