/*
  1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
  answer: This is constant time O(1) because the operation (yelling at the room of people) would take the same amount of time to complete no matter how many people in the room.

  2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
  answer: this is Linear time O(n) becuase the operation (asking each person in the room) would take the same amount of time but you have to do if for each person in the room so the running time is directly proportional to the amount of people in the room.
*/