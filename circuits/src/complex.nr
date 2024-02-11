use dep::std;
use crate::math::sqrt;

global scale = 1000;

struct Number {
    sign : bool,
    value : Field
}

struct Complex{
    real : Number,
    imag : Number
}

pub fn addNum(x: Number, y: Number) -> Number{
    let mut ans_val = 0;
    let mut ans_sign = false;
    if ((x.sign == false) & (y.sign == false)){
        ans_sign = false;
        ans_val = x.value + y.value;
    } else if ((x.sign == true) & (y.sign == true)) {
        ans_sign = true;
        ans_val = x.value + y.value;
    } else if ((x.sign == false) & (y.sign == true)) {
        if (x.value as u126< y.value as u126){
            ans_sign = true;
            ans_val = y.value - x.value;
        } else {
            ans_sign = false;
            ans_val = x.value - y.value;
        }
    } else if ((x.sign == true) & (y.sign == false)){
        if (x.value as u126 < y.value as u126){
            ans_sign = false;
            ans_val = y.value - x.value;
        } else {
            ans_sign = true;
            ans_val = x.value - y.value;
        }
    }
    let ans = Number{
        sign : ans_sign,
        value : ans_val,
    };
    ans
}

pub fn subNum(x: Number, y: Number) -> Number{
    let z = Number{
        sign : !y.sign,
        value : y.value
    };
    let ans = addNum(x,z);
    ans
}

pub fn mulNum(x: Number, y: Number) -> Number{
    let mut ans_sign = false;
    let mut ans_val = 0;
    if ((x.sign == true) & (y.sign == true)) |((y.sign == false) & (x.sign == false)){
        ans_val = (x.value*y.value)/scale;
        ans_sign = false;
    } else if ((x.sign == false) & (y.sign == true))|((x.sign == true) & (y.sign == false)){
        ans_val = (x.value*y.value)/scale;
        ans_sign = true;
    }
    let ans = Number{
        sign : ans_sign,
        value : ans_val
    };
    ans
}

pub fn divNum(x: Number, y: Number) -> Number{
    let mut ans_sign = false;
    let mut ans_val = 0;
    if ((x.sign == true & y.sign == true) |(y.sign == false & x.sign == false)){
        ans_val = (x.value*scale)/y.value;
        ans_sign = false;
    } else if ((x.sign == false & y.sign == true)|(x.sign == true & y.sign == false)){
        ans_val = (x.value*scale)/y.value;
        ans_sign = true;
    }
    let ans = Number{
        sign : ans_sign,
        value : ans_val
    };
    ans
}

pub fn addComplex(x : Complex, y : Complex) -> Complex{
    let r = addNum(x.real, y.real);
    let i = addNum(x.imag, y.imag);
    let ans = Complex{
        real : r,
        imag : i
    };
    ans
}

pub fn subComplex(x : Complex, y : Complex) -> Complex{
    let r = subNum(x.real,y.real);
    let i = subNum(x.imag,y.imag);
    let ans = Complex{
        real : r,
        imag : i
    };
    ans
}

pub fn mulComplex(x : Complex, y : Complex) -> Complex{
    let r = subNum(mulNum(x.real,y.real) , mulNum(x.imag,y.imag));
    let i = addNum(mulNum(x.real,y.imag) , mulNum(x.imag,y.real));
    let ans = Complex{
        real : r,
        imag : i
    };
    ans
}

pub fn divComplex(x : Complex, y : Complex) -> Complex{
    let r = divNum(addNum(mulNum(x.real,y.real), mulNum(x.imag,y.imag)), addNum(mulNum(y.real,y.real), mulNum(y.imag,y.imag)));
    let i = divNum(subNum(mulNum(y.real,x.imag), mulNum(y.imag,x.real)), addNum(mulNum(y.real,y.real), mulNum(y.imag,y.imag)));
    let ans = Complex{
        real : r,
        imag : i
    };
    ans
}

pub fn magnitude(x : Complex) -> Field{
    let real = x.real.value;
    let imag = x.imag.value;
    let r2 = real*real + imag*imag;
    let r = sqrt(r2);
    r
}