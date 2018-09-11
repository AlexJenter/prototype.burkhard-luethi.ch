export const clamp = (min, max, val) => 
[min, val, max].sort((a, b) => a - b)[1]
