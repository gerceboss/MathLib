use dep::std;

mod complex;
mod math;

global scale = 10000;

fn main(
    c1: complex::Complex,
    c2: complex::Complex,
    out_sub: pub Field,
    out_mul: pub Field,
    out_div: pub Field
) {
    let out_1 = complex::subComplex(c1, c2);
    let out_hash_1 = std::hash::pedersen_hash([out_1.real.sign as Field,out_1.real.value, out_1.imag.sign as Field, out_1.imag.value]);
    assert(out_hash_1 == out_sub);

    let out_2 = complex::mulComplex(c1, c2);
    let out_hash_2 = std::hash::pedersen_hash([out_2.real.sign as Field,out_2.real.value,out_2.imag.sign as Field, out_2.imag.value]);
    assert(out_hash_2 == out_mul);  

    let out_3 = complex::divComplex(c1, c2);
    let out_hash_3 = std::hash::pedersen_hash([out_3.real.sign as Field,out_3.real.value,out_3.imag.sign as Field, out_3.imag.value]);
    assert(out_hash_3 == out_div);

}

#[test]
fn test_main() {}
