# Simulation Input Reference

This file documents what each simulated algorithm currently accepts in the app, along with ready-to-use test cases.

## Global Input Rules

- Node labels for graph simulations are integer ids from 0 to N-1.
- Graph edges are one per line.
- Unweighted graph edge format: u v
- Weighted graph edge format: u v w
- List values can be comma-separated or space-separated.

## Sorting and Searching (category: sorting)

### Bubble Sort

- Input mode: Numeric list
- Example test case: 9, 4, 7, 2, 6, 1, 5

### Selection Sort

- Input mode: Numeric list
- Example test case: 10, 3, 8, 2, 7, 6

### Insertion Sort

- Input mode: Numeric list
- Example test case: 5, 2, 9, 1, 5, 6

### Merge Sort

- Input mode: Numeric list
- Example test case: 12, 11, 13, 5, 6, 7

### Quick Sort

- Input mode: Numeric list
- Example test case: 8, 4, 7, 3, 10, 2, 9

### Heap Sort

- Input mode: Numeric list
- Example test case: 4, 10, 3, 5, 1

### Binary Search

- Input mode: Numeric search
- Fields:
  - Numeric list
  - Target value
- Example test case: 23, 4, 15, 8, 42, 16, 9
  - Target: 16

### Ternary Search

- Input mode: Numeric search
- Fields:
  - Numeric list
  - Target value
- Example test case: 30, 10, 20, 40, 50, 60, 70
  - Target: 50

## Graph Algorithms (category: graphs)

### BFS

- Input mode: Graph (unweighted, undirected)
- Fields:
  - Number of nodes
  - Start node
  - Edges (u v)
- Example test case:
  - Number of nodes: 6
  - Start node: 0
  - Edges:
    0 1
    0 2
    1 3
    2 4
    3 5
    4 5

### DFS

- Input mode: Graph (unweighted, undirected)
- Fields:
  - Number of nodes
  - Start node
  - Edges (u v)
- Example test case:
  - Number of nodes: 7
  - Start node: 0
  - Edges:
    0 1
    0 2
    1 3
    1 4
    2 5
    2 6

### Dijkstra's Algorithm

- Input mode: Graph (weighted, undirected)
- Fields:
  - Number of nodes
  - Start node
  - Target node
  - Edges (u v w)
- Example test case:
  - Number of nodes: 6
  - Start node: 0
  - Target node: 5
  - Edges:
    0 1 4
    0 2 2
    1 3 3
    2 3 1
    2 4 6
    3 5 2
    4 5 4

### A\* Search

- Input mode: Graph (weighted, undirected)
- Fields:
  - Number of nodes
  - Start node
  - Target node
  - Edges (u v w)
- Example test case:
  - Number of nodes: 6
  - Start node: 0
  - Target node: 5
  - Edges:
    0 1 2
    0 2 3
    1 3 2
    2 3 1
    3 4 2
    4 5 2

### Topological Sort

- Input mode: Graph (unweighted, directed)
- Fields:
  - Number of nodes
  - Edges (u v)
- Example test case:
  - Number of nodes: 6
  - Edges:
    5 2
    5 0
    4 0
    4 1
    2 3
    3 1

### Kruskal's Algorithm

- Input mode: Graph (weighted, undirected)
- Fields:
  - Number of nodes
  - Edges (u v w)
- Example test case:
  - Number of nodes: 6
  - Edges:
    0 1 4
    0 2 4
    1 2 2
    1 3 5
    2 3 5
    2 4 11
    3 4 2
    3 5 1
    4 5 7

### Prim's Algorithm

- Input mode: Graph (weighted, undirected)
- Fields:
  - Number of nodes
  - Start node
  - Edges (u v w)
- Example test case:
  - Number of nodes: 5
  - Start node: 0
  - Edges:
    0 1 2
    0 3 6
    1 2 3
    1 3 8
    1 4 5
    2 4 7
    3 4 9

### Union-Find

- Input mode: Graph (unweighted, undirected)
- Fields:
  - Number of nodes
  - Edges (u v)
- Example test case:
  - Number of nodes: 7
  - Edges:
    0 1
    1 2
    3 4
    5 6
    2 6

## Dynamic Programming (category: dp)

### 0/1 Knapsack

- Input mode: Specialized knapsack form
- Fields:
  - Weights list
  - Values list
  - Capacity
- Example test case:
  - Weights: 2, 3, 4, 5
  - Values: 3, 4, 5, 8
  - Capacity: 8

### Longest Common Subsequence

- Input mode: Specialized string-pair form
- Fields:
  - String 1
  - String 2
- Example test case:
  - String 1: ABCDGH
  - String 2: AEDFHR

### Longest Increasing Subsequence

- Input mode: Generic value list (current implementation)
- Example test case: 10, 22, 9, 33, 21, 50, 41, 60

### Coin Change

- Input mode: Generic value list (current implementation)
- Example test case: 1, 2, 5, 11

### Matrix Chain Multiplication

- Input mode: Generic value list (current implementation)
- Example test case: 10, 30, 5, 60

## Greedy Algorithms (category: greedy)

### Huffman Coding

- Input mode: Generic value list (current implementation)
- Example test case: A, B, C, D, E

### Activity Selection

- Input mode: Generic value list (current implementation)
- Example test case: A1, A2, A3, A4, A5

### Fractional Knapsack

- Input mode: Generic value list (current implementation)
- Example test case: item1, item2, item3, item4

## Tree Algorithms (category: tree)

### Inorder Traversal

- Input mode: Generic value list (current implementation)
- Example test case: A, B, C, D, E

### Preorder Traversal

- Input mode: Generic value list (current implementation)
- Example test case: A, B, C, D, E

### Postorder Traversal

- Input mode: Generic value list (current implementation)
- Example test case: A, B, C, D, E

### BST Insert/Delete/Search

- Input mode: Generic value list (current implementation)
- Example test case: 50, 30, 70, 20, 40, 60, 80

### Lowest Common Ancestor

- Input mode: Generic value list (current implementation)
- Example test case: 3, 5, 1, 6, 2, 0, 8

## Pathfinding (category: pathfinding)

### A\* Search (astar-path)

- Input mode: Graph (weighted, undirected)
- Fields:
  - Number of nodes
  - Start node
  - Target node
  - Edges (u v w)
- Example test case:
  - Number of nodes: 6
  - Start node: 0
  - Target node: 5
  - Edges:
    0 1 4
    0 2 2
    1 3 3
    2 3 1
    3 4 2
    4 5 3

### Greedy Best First Search

- Input mode: Generic value list (current implementation)
- Example test case: S, A, B, C, G

## String Algorithms (category: string)

### KMP Algorithm

- Input mode: Generic value list (current implementation)
- Example test case: text, pattern

### Rabin-Karp

- Input mode: Generic value list (current implementation)
- Example test case: abracadabra, abra

## Backtracking (category: backtracking)

### N-Queens

- Input mode: Generic value list (current implementation)
- Example test case: 4, 5, 6

### Sudoku Solver

- Input mode: Generic value list (current implementation)
- Example test case: row1, row2, row3
