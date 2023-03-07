// selector.js
import { selector } from 'recoil';
import { countState, inputState } from './atom';

const countStateSelector = selector({
  key: 'CountState',

  get: ({ get }) => {
    const inputVal = get(inputState);
    const count = get(countState);

    return `추가된 카운트는 ${inputVal}이고, 현재 카운트는 ${count}입니다.`;
  },

  
});

export default countStateSelector;


// 셀렉터는 하나의 추출된 state. 
// 다시 말해서 추출된 state란, 주어진 상태를 변경(modify)시키는 순수 함수에 의해서 변경된 스테이트(the output)라고 말할 수 있다.
// state 의 추출 역할, 실제로 변경 x , state 를 read only 하는 기능
