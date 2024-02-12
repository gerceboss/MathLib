use dep::std;
use dep::std::collections::vec::Vec;
use crate::math::Number;
use crate::trigonometry::sin;
use crate::trigonometry::cos;

global facts=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800]; // 0 to 10 factorial
global PI=314;
global scale_for_PI=100;
global scale=10000;

//using cd=complex<double>
pub fn fft(a: &mut Vec<Number>, invert: bool) {
    let mut len= a.len();
    let mut n:Number= Number { sign: false, value: len };
    let mut a0:Vec<Number> = Vec::new(); //<cd>
    let mut a1:Vec<Number> = Vec::new(); //<cd>
    for i in 0..((n.value / 2) - 1) {
        let mut new_num0:Number = Number { sign: (a.get(2 * i)).sign, value: (a.get(2 * i)).value };
        a0.push(new_num0);
        //a0.get(i) = new_num0;
        let mut new_num1:Number = Number { sign: (a.get(2 * i + 1)).sign, value: (a.get(2 * i + 1)).value };
        //a1.get(i))= (a.get(2*i + 1 ));
        a1.push(new_num1);
    }
    // fft( &a0 , invert );
    // fft( &a1 , invert );
    let mut val:Number= Number { sign: false, value: 0 };
    if invert {
        val.value=-1;
    } else {
        val.value=1;
    } //check if we have to do the inverse fft or the normal fft

    //yaha se commented wala implement karna h

    //double real_ang= 2* PI/(scale_for_PI*n* val)
    //cd w(1), wn(cos(ang),sin(ang));
    //intitalise  2 complex number structs in here

    //let mut sine_angle=sin(ang);//scale* real_vale_of_sine
    //let mut cos_angle=cos(ang);//scale*real_value_of_cos
    let mut w= 1;
    for i in 0..((n.value / 2) - 1) {
        let mut new_num2:Number = Number { sign: (a.get(2 * i)).sign, value: a0.get(i).value + w * a.get(i).value };
        a.remove(i);
        a.insert(i, new_num2);
        //a.get(i) = new_num2;
        let mut new_num3:Number = Number { sign: (a.get(2 * i)).sign, value: a0.get(i).value - w * a1.get(i).value };
        a.remove(i + (n.value / 2));
        a.insert(i + (n.value / 2), new_num3);
        // a.get( i+ (n/2) ).value=;
        if invert {
            let mut new_val1:Number = Number { sign: (a.get(2 * i)).sign, value: a.get(i).value / 2 };
            a.remove(i);
            a.insert(i, new_val1);
            // a.get(i).value = new_val1;

            let mut new_val2:Number = Number { sign: (a.get(2 * i)).sign, value: a.get(i + (n.value / 2)).value / 2 };
            a.remove(i + (n.value / 2));
            a.insert(i + (n.value / 2), new_val2);
            //a.get(i +(n.value/2)).value/=2;
        }
        //w*=wn
    }
}

pub fn exponent(a: Number, b: Number) -> (Number) {
    let mut ans:Number= Number { sign: false, value: 1 };
    let mut b_val= b.value;
    for i in 1..b_val {
        ans.value*=a.value;
    }
    (ans)
}
//abs,sqrt,ln, log2,
//linear algebra 
//angle_between_2_vectors, dot_product, cross_product,matrix_mul_add_sub_inverse_adjoint_determinant_scalarmul
//combinomatrics, permutations,hermitioan matrices