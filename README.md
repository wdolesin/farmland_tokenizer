# Welcome to the Farmland Tokenizer
***
<a id="Top-of-Page"></a>

## <a id="Contents">Cotents</a>
[Project Description](#Project-Description)<br>
[Technologies](#Technologies)<br>
[Installation guide](#Installation-guide) <br>
[Resources](#Resources)<br>
[Usage](#Usage)<br>
[Contributors](#Contributors)<br>
[License](#License)<br>
[Bottom of Page](#Bottom-of-Page)<br>

***
## <a id="Project-Description">Project Description</a>
# Farmland Tokenizer 
Background
<p> Owning a farm for retail investors can be very difficult, as can selling one. The Farmland Tokenizer will enable all parties to seamlessly transact ownership in farmland through our dApp, where a marketplace can exist based on supply and demand direct from retail investor to owner.
</p>

<p> Both stocks and the real estate market have seen unprecidented gains in recent years and with the recent injection of new money into the economy, concerns over inflation and increasing diversification in one's portfolio, have both gained interest in the minds of investors. The Farmland Tokenizer will allow for a hedge against inflation and create added diversification.
</p>

Motivation
<p> Agricultural land has long been considered to be one of the most secure forms of investment and similarly to gold, farmland is used by many investors as a natural hedge against inflation.
With the global population expected to reach 9 billion in 2040, the future outlook for land resources looks bright and a case for farmland investment comes down to two words: scarcity and necessity.
According to the US Department of Agriculture the average price of an acre of U.S. cropland has risen about 75% over the last 15 years (NY Times 2021). Moreover, according to Forbes(2021) farmland has delivered a higher average annual return than most asset classes in the last 29 years (1992-2020). 

To summarize in more detail, farmland has:
* (1) Historically Attractive Returns (1992 - 2020 / 11.01%)
* (2) Low Volatility of Returns (1992 - 2020 / 6.9%)

 Cumulative Returns of Major Asset Classes, Indexed to 1990
  ![image](https://user-images.githubusercontent.com/85215301/142964652-a09d90e0-83b3-4aea-aa37-0fb0a1234b54.png)

  

</p>

***
## <a id="Technologies">Technologies</a>
* [Python](https://docs.python.org/release/3.8.0/)
* [Pandas](https://pandas.pydata.org/docs/)
* [Matplotlib](https://matplotlib.org/3.1.0/contents.html)
* [Prophet](https://facebook.github.io/prophet/docs/quick_start.html)
* [Tensorflow](https://www.tensorflow.org)
* [Keras](https://keras.io/about/)
* [Solidity](https://docs.soliditylang.org/en/v0.8.10/)
* [Streamlit](https://docs.streamlit.io/library/get-started)

***

## <a id="Installation guide">Installation guide</a>

The files containing the analysis of the farmland in the US and California leverage python 3.7 with the following libraries and dependencies:

``` python
pip install python-dotenv
pip install alpaca-trade-api
pip install matplotlib

```

In order to run the application you need to set up an Alpaca Markets account and obtain your personal API keys. You use these unique identifiers to establish an authenticated, secure connection to an API. For the security reasons you should store your unique API keys in a hidden file called .env This file protects the content of the file by hiding it in the structure of the project. To display hidden files in Jupyterlab run the following command in your terminal:

```python
jupyter lab --ContentsManager.allow_hidden=True
```

The project accesses the Alpaca API keys from the environment variables, and stores it in a Python variables named alpaca_api_key and alpaca_secret_api_key.

---
The analysis and price prediction of the Invesco DB Agriculture Fund "DBA" leverages python 3.7 with the following libraries and dependencies:

* Tensorflow - a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks

* Keras - a popular deep learning framework that serves as a high-level API for TensorFlow. Keras is now included with TensorFlow 2.0

```python
pip install --upgrade tensorflow
```

---




***
## <a id="Resources">Resources</a>
[1950 to 1994 Annual Price/Acre](https://www.ers.usda.gov/media/8648/sb738ab.xls)

[Average U.S. farm real estate value, nominal and real (inflation adjusted), 1970-2020](https://www.ers.usda.gov/webdocs/charts/55910/farmrealestatevalue2020_d.html?v=1175.2)

[USDA Agricultural Land Values](https://usda.library.cornell.edu/concern/publications/pn89d6567?locale=en#release-items)

[USDA Value of Land and Building Per Acre](https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/technical/econ/references/?cid=nrcs143_009723)
***
## <a id="Usage">Usage</a>

***
## <a id="Contributors">Contributors</a>
* Ksenia Gorska 
* Kevin Mau 
* Sangram Singh 
* William Olesinski

***
## <a id="License">License</a>
This project was licensed under the MIT License. 


[Top of Page](#Top-of-Page)<br>
<a id="Bottom-of-Page"></a>
