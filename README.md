Diamonds
========

About
-----

This is the clone of [Diamonds](http://en.wikipedia.org/wiki/Diamonds_%28video_game%29), an old Macintosh game I loved as a kid. It is still very much a work in progress.

Currently I'm just working on implementing features and levels from the original game (which was really hard!) but eventually I'll have a more reasonable difficulty mode.

I used the [Crafty.js](http://craftyjs.com/) game library for my game. It's a very light weight library that provided me with an entity system and handled cross platform canvas manipulations easily.

Play it
-------

A (probably) up to date version is on my site at [http://tylerwymer.com/diamonds/index.html](http://tylerwymer.com/diamonds/index.html).

It can also be opened locally as everything needed is included.

Controls
--------

* Left and right arrow keys to move
* E -- Opens custom level editor (still a work in progress)
* D -- Delete any existing custom levels and restart game

Instructions
------------

The goal of Diamonds is to clear all of the diamond blocks. In order to be able to clear a diamond block, however, all of the colored blocks need to be cleared first. To break a block of a given color you must first touch the appropriate paintbrush block. Careful, though, there are no light blue paintbrushes!

Other than color blocks, later levels feature lock, key and reverse blocks. To break a key or lock you have to touch the appropriate paintbrush first. The reverse blocks can be taken no matter what color you are.

Every 10,000 points you receive a new life.

Good luck!

Cheater cheater pumpkin eater?
------------------------------

Okay, like I said, the game was/is **hard**. The original game had like 75 levels and while <s>procrastinating</s> researching I rarely got past level 15. So here are some <s>lame</s> helpful ways to cheat if you know how to get to your Javascript console.

* `game.skipLevel();` -- Skip the current level (you even get to keep the time bonus here)
* `game.skipToLevel(number);` -- Jump to a given level number (zero indexed)
* `game.lives = 9001;` -- It's over 9000!
