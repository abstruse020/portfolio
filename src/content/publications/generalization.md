---
title: "Data-Dependent Generalization Bounds for Neural Networks with ReLU"
authors: "H Pandey, A Bagchi, SJ Bedathur, A Bhattacharya"
journal: "TMLR"
year: 2024
tags: ["Generalization Bound", "Stability", "Deep Learning Theory"]
url: "https://openreview.net/forum?id=mH6TelHVKD"
order: 3
---

Data-Dependent Generalization bound with weaker notion of stability for non-convex functions.

## Abstract

We try to establish that one of the correct data-dependent quantities to look at while trying to prove generalization bounds, even for overparameterized neural networks, are the gradients encountered by stochastic gradient descent while training the model. If these are small, then the model generalizes. To make this conclusion rigorous, we weaken the notion of uniform stability of a learning algorithm in a probabilistic way by positing the notion of almost sure (a.s.) support stability and showing that algorithms that have this form of stability have generalization error tending to 0 as the training set size increases. Further, we show that for Stochastic Gradient Descent to be a.s. support stable we only need the loss function to be a.s. locally Lipschitz and locally Smooth at the training points, thereby showing low generalization error with weaker conditions than have been used in the literature. We then show that Neural Networks with ReLU activation and a doubly differentiable loss function possess these properties. Our notion of stability is the first data-dependent notion to be able to show good generalization bounds for non-convex functions with learning rates strictly slower than 1/t at the t-th step. Finally, we present experimental evidence to validate our theoretical results.
