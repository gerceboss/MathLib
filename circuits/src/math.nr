struct Number{
    sign:bool,
    value:Field,
}
pub fn abs(a: Number) -> (Number) {
    let mut ans:Number = Number { sign: false, value: a.value };
    //sign ==true means -ve number
    ans
}

pub fn sqrt(x : u126) -> u126 {
    if x==0{
        x
    }

    let mut xAux = x;
    let mut result = 1 as u126;

    if (xAux >= 0x100000000 ) {
        xAux >>= 32;
        result <<= 16;
    }
    if (xAux >= 0x10000) {
        xAux >>= 16;
        result <<= 8;
    }
    if (xAux >= 0x100) {
        xAux >>= 8;
        result <<= 4;
    }
    if (xAux >= 0x10) {
        xAux >>= 4;
        result <<= 2;
    }
    if (xAux >= 0x4) {
        result <<= 1;
    }
    result = (result + x / result) >> 1;
    result = (result + x / result) >> 1;
    result = (result + x / result) >> 1;
    result = (result + x / result) >> 1;
    result = (result + x / result) >> 1;
    result = (result + x / result) >> 1;
    result = (result + x / result) >> 1; 
    let roundedDownResult = x / result;
    let mut final_res = 0 as u126;

    if result >= roundedDownResult {
        final_res = roundedDownResult;
    } else {
        final_res = result;
    }
    final_res
}