---
title: "Gnnxemplar: Exemplars to explanations-natural language rules for global GNN interpretability"
authors: "B Armgaan, E Jain, H Pandey, M Chandran, S Ranu"
journal: "NeurIPS"
year: 2025
doi: "10.52202/085713-2440"
tags: ["GNN Explainability", "Natural Language Explanation", "Explainability"]
url: "https://proceedings.neurips.cc/paper_files/paper/2025/hash/698b6c484ca4988c9aa21f8d965a7f90-Abstract-Conference.html"
order: 2
---

Global Natural language rules for black box GNNs.

## Abstract
Graph Neural Networks (GNNs) are widely used for node classification, yet their opaque decision-making limits trust and adoption. While local explanations offer insights into individual predictions, global explanation methods—those that characterize an entire class—remain underdeveloped. Existing global explainers rely on motif discovery in small graphs, an approach that breaks down in large, real-world settings where subgraph repetition is rare, node attributes are high-dimensional, and predictions arise from complex structure-attribute interactions. We propose GnnXemplar, a novel global explainer inspired from Exemplar Theory from cognitive science. GnnXemplar identifies representative nodes in the GNN embedding space—exemplars—and explains predictions using natural language rules derived from their neighborhoods. Exemplar selection is framed as a coverage maximization problem over reverse k-nearest neighbors, for which we provide an efficient greedy approximation. To derive interpretable rules, we employ a self-refining prompt strategy using large language models (LLMs). Experiments across diverse benchmarks show that GnnXemplar significantly outperforms existing methods in fidelity, scalability, and human interpretability, as validated by a user study with 60 participants.
