# S20-team8-project
## Team 8 - ALCOVE - Attention to the right details with detailed attention.
### Food Recognition Software for a Web App
---

This project uses convolutional neural network to generate a food recognization model for a free food finder webapp. The model is trained on a very famous dataset Food101 provided by Kaggle and originally from the research paper "Food-101 – Mining Discriminative Components with Random Forests" by Lukas Bossard [1].

Food-101 is a challenging dataset consisting of 101,000 images of 101 different food classes.  On purpose, the training images were not cleaned, and thus still contain some amount of noise. This comes mostly in the form of intense colors and sometimes wrong labels. Taking a look at some of the images, we can see that the dataset is consist of random pictures taken by the mobile phone rather than beautifuly showcased food. For example, all of the images below have been labelled as "bread pudding", yet even as a human, I think I’d struggle to classify them as such.

<img src="https://github.com/CSCI4850/S20-team8-project/blob/master/Image_for_readme_bread_pudding.png" width="50%">

# Getting Started

Before you can run this project, you will need to install some programs and dependencies.

## Installing necessary programs and libraries

1. Python 3 or higher: Python 3 is necessary to run another program that we use: Jupyter Notebook. Python 3 can be found at https://python.org/downloads/

2. Jupyter Notebook: The project is written in .ipynb files. To open these files, you'll need Jupyter Notebook. You can install this at https://jupyter.org/install

3. PIP: PIP is a python package manager. It is necessary to easily install the dependencies of this project. You can find out how to install PIP at https://pip.pypa.io/en/stable/installing/   

4. After cloning the repository, you may install the necessary dependencies by navigating to the the top directory (that contains the 'requirements.txt' file) and run: pip install -r requirements.txt. This file contains all the libraries required for our neural network as well as our webapp.

## Download Dataset

You can download our dataset from this link [Download Food101 Dataset](https://www.kaggle.com/dansbecker/food-101#food-101.zip)

## Project tree
* [Demo](./Demo)
    * [CNN_Models](./Demo/CNN_Models) &nbsp;&nbsp;&nbsp; <sup><sub> (This directory contains demo for our neural network) </sup></sub>
      * [Model1_Demo.ipynb](./Demo/CNN_Models/Model1-Kfold_101_Top5-10.ipynb)
      * [Model2_Demo.ipynb](./Demo/CNN_Models/Model2-Kfold_50_Top5-10.ipynb)
      * [Model3_Demo.ipynb](./Demo/CNN_Models/Model3-Kfold_25_Top5-10.ipynb)
     
   *  [FoodRecognizer-Webapp](./Demo/FoodRecognizer-Webapp)  &nbsp;&nbsp;&nbsp; <sup><sub> (This directory contains demo for our neural network) </sup></sub>
* [Different Neural Network Architecture](./Different%20Neural%20Network%20Architecture) &nbsp;&nbsp;&nbsp; <sup><sub> (Contains all the models we tried with code and figures for visualization) </sup></sub>
   * [Figure generation and accuracy ](https://github.com/CSCI4850/S20-team8-project/tree/master/figure_generation_and_data)
      * [Average 5Fold accuracy and F1 for Model1, Model2 and Model3 ](https://github.com/CSCI4850/S20-team8-project/tree/master/figure_generation_and_data/graphz.ipynb)
* [Project_Paper](./Project_Paper)  &nbsp;&nbsp;&nbsp; <sup><sub> (Contains .tex and .bib file for the final paper) </sup></sub>
* [README.md](./README.md)
* [Project_Proposal.ipynb](./Project_Proposal.ipynb)   
* [Project_Milestone.ipynb](./Project_Milestones.ipynb)
* [Project_Paper.pdf](./Project_Paper.pdf)   &nbsp;&nbsp;&nbsp; <sup><sub> (Final paper in pdf format) </sup></sub>
* [requirement.txt](./requirements.txt)    &nbsp;&nbsp;&nbsp; <sup><sub> (Requirements for the project) </sup></sub>

#### Web app

![](./Demo/FoodRecognizer-Webapp/ezgif.com-resize.gif)

## Step to run our code to obtain the neural network model
```shell
1. Clone this repo
   $ git clone 'https://github.com/CSCI4850/S20-team8-project.git'
   $ cd S20-team8-project
   $ cd Demo
```
2. Run ipynb notebook file

--> [Model1_Demo ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model1%20-%20Kfold_101_Top5-10.ipynb)

--> [Model2_Demo ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model2%20-%20Kfold_50_Top5-10.ipynb)

--> [Model3_Demo ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model3%20-%20Kfold_25_Top5-10.ipynb)
  
3. Your Model will be saved in the same folder with name 'food_model_101.h5', food_model_50.h5 and food_model_25.h5

4. Done

#### Step to run our web app using the model created
Our Food Recognition model for Food - 101 categories is in folder named [model](https://github.com/CSCI4850/S20-team8-project/tree/master/Demo/FoodRecognizer-Webapp/models). You can replace the model by your model and update 
categories list with the name 'CATEGORIES' in 'app.py' file to your classes/labels if needed.

```shell
# 1. First, clone the repo and go to the folder having app.py
  $ git clone 'https://github.com/CSCI4850/S20-team8-project.git'
  $ cd S20-team8-project 
  $ cd 'Demo'
  $ cd 'FoodRecognizer-Webapp'

# 2. Run!the script
  $ python app.py

# 3. Go to http://127.0.0.1:5000

# 4. Done
```

## References
<a id="1">[1]</a> 
Lukas Bossard, Matthieu Guillaumin, and Luc Van Gool. Food-101 – mining discrimi-native components with random forests. In European Conference on Computer Vision,2014


### Members
Elijah Barbour, Heena Khan, James Phillips, Luis Chunga, Mason Thieman, Matthew Radice, Steven Sheffey.

The code being developed within this repository is for an image recognition algorithm which will be incorporated into a web app. This group project fulfills the requirements for completing CSCI 4850/5850 Spring 2020 Neural Networks class at Middle Tennessee State University.
