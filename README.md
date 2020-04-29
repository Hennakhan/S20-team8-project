# S20-team8-project
## Team 8 - ALCOVE - Attention to the right details with detailed attention.
### Food Recognition Software for a Web App

Abstract - Image classification is the task of classifying an image into a class category. In this paper, we developed three food classifier models, namely Model-1, Model-2, and Model-3, that can classify the image into 101, 50, and 25 food categories, respectively. We have used a Convolutional neural network for this purpose. Since CNN's are efficient in correlating and understanding a large amount of data in high-resolution images, they are best known for their ability to recognize patterns present in images. Our Model-1 is deployed to a Food recognizer web app.

[Project_Proposal] (https://github.com/CSCI4850/S20-team8-project/blob/master/Project_Paper.pdf)

[Project Proposal](https://github.com/CSCI4850/S20-team8-project/blob/master/ProjectProposal.ipynb)

[Project Milestone](https://github.com/CSCI4850/S20-team8-project/blob/master/Project_Milestones.ipynb)

[Food Recognizer Web App ](https://github.com/CSCI4850/S20-team8-project/tree/master/Food%20Recognizer%20Web%20App)

[Neural Network Code for Model 1 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Different%20Neural%20Network%20Architecture/Model1%20-%20Kfold_101_Top5-10.ipynb)

[Neural Network Code for Model 2 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Different%20Neural%20Network%20Architecture/Model2%20-%20Kfold_50_Top5-10.ipynb)

[Neural Network Code for Model 3 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Different%20Neural%20Network%20Architecture/Model3%20-%20Kfold_25_Top5-10.ipynb)

[Download Dataset](https://www.kaggle.com/dansbecker/food-101#food-101.zip)

Web app

![](https://github.com/CSCI4850/S20-team8-project/blob/master/Food%20Recognizer%20Web%20App/ezgif.com-resize.gif)

## Run our code to obtain the neural network model
1. Clone this repo

  --> $ git clone 'https://github.com/CSCI4850/S20-team8-project.git'
  
  --> cd S20-team8-project

2. Install requirements

  --> $ pip install -r requirements.txt

3. Download and unzip the dataset in the same folder

  --> [Download Dataset](https://www.kaggle.com/dansbecker/food-101#food-101.zip)

4. Run ipynb 

  --> Model1 - Kfold_101_Top5-10.ipynb
  --> Model2 - Kfold_50_Top5-10.ipynb
  --> Model3 - Kfold_25_Top5-10.ipynb
--->

5. Done

## Run our web app using the model created
Our Food Recognition model for Food - 101 categories is in folder named 'models'. You can replace the model by your model and update 
categories list in 'app.py' file to your classes/labels.

1. Clone this repo

  --> $ git clone 'https://github.com/CSCI4850/S20-team8-project.git'
  
  --> cd S20-team8-project
  
  --> cd 'Food Recognizer Web App'

2. Install requirements

  --> $ pip install -r requirements.txt

3. Run the script

  --> $ python app.py

4. Go to http://127.0.0.1:5000

  --> Done


### Members
Elijah Barbour, Heena Khan, James Phillips, Luis Chunga, Mason Thieman, Matthew Radice, Steven Sheffey.

The code being developed within this repository is for an image recognition algorithm which will be incorporated into a web app. This group project fulfills the requirements for completing CSCI 4850/5850 Spring 2020 Neural Networks class at Middle Tennessee State University.
