#!/usr/bin/env node

import playGame from '..';
import { description, getQuestionAnswer } from '../../games/brain-calc';

playGame(getQuestionAnswer, description);
