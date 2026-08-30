---
title: "Temporal Energy Transformer for Long Range Propagation in Continuous Time Dynamic Graphs"
authors: "PSA Salam, A Abhishek, H Pandey"
journal: "TMLR"
year: 2026
tags: ["energy transformer", "continuous time dynamic graphs", "temporal graph"]
url: "https://openreview.net/forum?id=zg3bi0GRJk"
order: 1
---

Energy based propagation for message passing GNN for continuous time series graph data. 

## Abstract
Representation learning on temporal graphs is crucial for understanding dynamically varying real-world systems such as social media platforms, financial transactions, transportation networks, and communication systems. Existing self-attention based models encounter limitations in capturing long-range dependencies and lack clear theoretical foundations. Energy-based models offer a promising alternative, with a well-established theoretical foundation that avoids reliance on pseudo-losses. However, their application in this domain remains largely unexplored, primarily due to the challenge of designing energy functionals. In this work, we introduce the Temporal Energy Transformer (TET), a novel energy-based architecture that integrates with the Temporal Graph Network (TGN) framework. Our approach centres on a novel energy-based graph propagation module that leverages a specially designed energy functional to capture and preserve spatio-temporal information. This is achieved by modelling the temporal dynamics of irregular data streams with a continuous-time differential equation. Our temporal energy transformer (TET) layer employs a series of temporal energy attention layers and a dense associative memory model or a modern Hopfield network. This design demonstrably minimizes the energy functional that is tailored, enabling efficient retention of historical context while assimilating the incoming data. The efficacy of the model is comprehensively validated across a diverse range of temporal graph datasets, including those with long-range dependencies, demonstrating superior performance in both transductive and inductive scenarios for dynamic link prediction.
