use dep::std;
use crate::fft::facts;
use crate::fft::exponent;
use crate::math::Number;

global scale=1000;

pub fn sin(angle: Field) -> (Field) {
    let mut ans:Field= scale;
    for i in 1..5 {
        let mut coeff= -1;
        let mut denom= 0;
        if (i as u4 % 2) == 0 {
            coeff=1;
        }
        let angle:Number= Number { sign: false, value: angle };
        let mut num= exponent(angle, Number { sign: false, value: 2 * i + 1 });
        denom= facts[ 2*i +1];
        ans+=(std::wrapping_mul(scale, num.value) * coeff )/(denom);
    }
    (ans)
}
pub fn cos(angle: Field) -> (Field) {
    let mut ans:Field= scale;
    for i in 1..5 {
        let mut coeff= -1;
        let mut denom= 0;
        if i as u4 & 1 != 1 {
            coeff=1;
        }
        let angle:Number= Number { sign: false, value: angle };
        let mut num= exponent(angle, Number { sign: false, value: 2 * i });
        denom= facts[ 2*i ];
        ans+=(std::wrapping_mul(scale, num.value) * coeff )/(denom);
    }
    (ans)
}
