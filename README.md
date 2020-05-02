# S20-team8-project
## Team 8 - ALCOVE - Attention to the right details with detailed attention.
### Food Recognition Software for a Web App

This project uses convolutional neural network to generate a food recognization model for a free food finder webapp. The model is trained on a very famous and  noisy dataset Food101 provided by Kaggle and originaly from the research paper "Food-101 – Mining Discriminative Components with Random Forests" by Lukas Bossard [1].

Food-101 is a challenging dataset consisting of 101,000 images of 101 different food classes. Taking a look at some of the images, we can see why models may struggle to get good results. For example, all of the images in Figure 1 have been labelled as "bread pudding", yet even as a human, I think I’d struggle to classify them as such.

![](https://github.com/CSCI4850/S20-team8-project/blob/master/Image_for_readme_bread_pudding.png| width=100)

[Project Paper](https://github.com/CSCI4850/S20-team8-project/blob/master/Project_Paper.pdf)

[Project Proposal](https://github.com/CSCI4850/S20-team8-project/blob/master/ProjectProposal.ipynb)

[Project Milestone](https://github.com/CSCI4850/S20-team8-project/blob/master/Project_Milestones.ipynb)

[Food Recognizer Web App ](https://github.com/CSCI4850/S20-team8-project/tree/master/Food%20Recognizer%20Web%20App)

[Average 5Fold accuracy and F1 for Model1, Model2 and Model3 ](https://github.com/CSCI4850/S20-team8-project/tree/master/figure_generation_and_data/graphz.ipynb)

[Model-1 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model1%20-%20Kfold_101_Top5-10.ipynb)

[Model-2 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model2%20-%20Kfold_50_Top5-10.ipynb)

[Model-3 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model3%20-%20Kfold_25_Top5-10.ipynb)

[Download Dataset](https://www.kaggle.com/dansbecker/food-101#food-101.zip)

#### Web app

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

--> [Model-1 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model1%20-%20Kfold_101_Top5-10.ipynb)

--> [Model-2 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model2%20-%20Kfold_50_Top5-10.ipynb)

--> [Model-3 ](https://github.com/CSCI4850/S20-team8-project/blob/master/Model3%20-%20Kfold_25_Top5-10.ipynb)
  

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

## References
<a id="1">[1]</a> 
Lukas Bossard, Matthieu Guillaumin, and Luc Van Gool. Food-101 – mining discrimi-native components with random forests. In European Conference on Computer Vision,2014







### Members
Elijah Barbour, Heena Khan, James Phillips, Luis Chunga, Mason Thieman, Matthew Radice, Steven Sheffey.

The code being developed within this repository is for an image recognition algorithm which will be incorporated into a web app. This group project fulfills the requirements for completing CSCI 4850/5850 Spring 2020 Neural Networks class at Middle Tennessee State University.
