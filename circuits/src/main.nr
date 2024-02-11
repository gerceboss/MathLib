use dep::std;
use dep::std::collections::vec::Vec;
mod float;
mod trigonometry;
mod math;
//use math::Number;
mod fft;

// struct Number{
//     sign:bool,
//     value:Field,
// }

fn main() {
    //let mut a0:Vec<math::Number>=Vec::new();

    let mut var1= math::Number { sign: false, value: 2500 };
    let mut var2= math::Number { sign: false, value: 2 };
    let mut var3= math::Number { sign: false, value: 3 };
    std::println(math::abs(var2));
    std::println(math::sqr_root_real(var1));
    std::println(fft::exponent(var2, var3));
}

#[test]
fn test_main() {
    main();
    // Uncomment to make test fail
    // main(1, 1);
}
