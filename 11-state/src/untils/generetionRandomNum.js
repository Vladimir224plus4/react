import maxNum from './maxNum';

function generateRandomNum(){
    return Math.floor(Math.random() * maxNum);
}

export default generateRandomNum;