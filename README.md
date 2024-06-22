# The 100 Prisoners Problem Simulation Tool
This JavaScript Code Is Used For Simulating The 100 Prisoners Problem

## Problem Details | Source: Wikipedia
The 100 prisoners problem is a mathematical problem in probability theory and combinatorics. In this problem, 100 numbered prisoners must find their own numbers in one of 100 drawers in order to survive. The rules state that each prisoner may open only 50 drawers and cannot communicate with other prisoners. At first glance, the situation appears hopeless, but a clever strategy offers the prisoners a realistic chance of survival.
Anna Gál and Peter Bro Miltersen first proposed the problem in 2003.

Surprisingly, there is a strategy that provides a survival probability of more than 30%. The key to success is that the prisoners do not have to decide beforehand which drawers to open. Each prisoner can use the information gained from the contents of every drawer they already opened to decide which one to open next. Another important observation is that this way the success of one prisoner is not independent of the success of the other prisoners, because they all depend on the way the numbers are distributed.

To describe the strategy, not only the prisoners, but also the drawers, are numbered from 1 to 100; for example, row by row starting with the top left drawer. The strategy is now as follows:

1. Each prisoner first opens the drawer labeled with their own number.
2. If this drawer contains their number, they are done and were successful.
3. Otherwise, the drawer contains the number of another prisoner, and they next open the drawer labeled with this number.
4. The prisoner repeats steps 2 and 3 until they find their own number, or fail because the number is not found in the first fifty opened drawers.
If the prisoner could continue indefinitely this way, they would inevitably loop back to the drawer they started with, forming a permutation cycle (see below). By starting with their own number, the prisoner guarantees they are on the specific cycle of drawers containing their number. The only question is whether any cycle is longer than fifty drawers - and only one cycle can possibly be too long, since at most one can comprise more than half of the total drawers.

## Simulation
in this simulation, we will repeat the problem thousands and thousand of times to get an accurate number of the chance of survival
