use dep::std;
use dep::std::collections::vec::Vec;

// mod float;
// mod trigonometry;
mod math;
// mod fft;
mod complex;

global scale = 1000;

fn main() {

    let mut var1:Field= 2500;
    let mut var2= math::Number { sign: true, value: 2 };
    let mut var3= math::Number { sign: false, value: 3 };
    std::println(math::abs(var2));
    std::println(math::sqrt(var1));
    // std::println(fft::exponent(var2, var3));

    let n1 = complex::Number{
        sign : false,
        value : 5*scale
    };
    let n2 = complex::Number{
        sign : false,
        value : 4*scale
    };
    let n3 = complex::Number{
        sign : false,
        value : 2*scale
    };
    let n4 = complex::Number{
        sign : true,
        value : 1*scale
    };
    let c1 = complex::Complex{
        real : n1,
        imag : n2
    };
    let c2 = complex::Complex{
        real : n3,
        imag : n4
    };
    let answer = complex::divComplex(c1,c2);
    std::println(answer);
}

#[test]
fn test_main() {
    main();
}
