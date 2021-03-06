speak 
===

This is the Python server portion of the app. Through this server, we will expose the ability to generate the "correct" pronunciation for a word as well as the "incorrect" pronunciations for a word. 

## Structure

In general, the structure of the server is as follows:
- Takes in a word
- Looks up the pronunciation of the word
    - Modify the pronunciation of the word in several different ways
- Push all of the pronunciations to the Amazon Speech Synthesis
- Store these result and expose the result through a Web API endpoint.

## Setup and run

**Important**: We haven't try to run this on Python lower than **3.6**

To run the server, just install the `requirements.txt` and run the `api.py` file.

- Install the required packages

    `pip install -r requirements.txt`
    
- Run the server

    `python api.py`

## But AWS is an another story

- While you are setting up your AWS server, you might also want to setup the `virtualenv` and run the server inside it.
- Remember to open port `5000`.
- Take note of the IP address of your AWS instance. We will need to fill this in to the constant in the app itself.
