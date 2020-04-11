export default {
  'sound effects': {
    'doesItemBelongToGroup': (i) => {return i.clipCount == 0 && !i.isMusic},
    'items': [],
  },
  'characters': {
    'doesItemBelongToGroup': (i) => {return i.clipCount > 0},
    'items': [],
  },
  'music': {
    'doesItemBelongToGroup': (i) => {return i.isMusic},
    'items': [],
  },
  'other': {
   'doesItemBelongToGroup': (i) => {return false},
   'items': [],
  },
};
