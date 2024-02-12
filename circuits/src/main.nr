use dep::std;

mod complex;
mod math;

global scale = 10000;

fn main(
    c1: complex::Complex,
    c2: complex::Complex,
    out_sub: pub complex::Complex,
    out_mul: pub complex::Complex,
    out_div: pub complex::Complex
) {
    let out_1 = complex::subComplex(c1, c2);
    assert(out_1.real.value == out_sub.real.value);
    assert(out_1.imag.value == out_sub.imag.value);
    assert(out_1.imag.sign == out_sub.imag.sign);
    assert(out_1.real.sign == out_sub.real.sign);

    let out_2 = complex::mulComplex(c1, c2);
    assert(out_2.real.value == out_mul.real.value);
    assert(out_2.imag.value == out_mul.imag.value);
    assert(out_2.imag.sign == out_mul.imag.sign);
    assert(out_2.real.sign == out_mul.real.sign);

    let out_3 = complex::divComplex(c1, c2);
    assert(out_3.real.value == out_div.real.value);
    assert(out_3.imag.value == out_div.imag.value);
    assert(out_3.imag.sign == out_div.imag.sign);
    assert(out_3.real.sign == out_div.real.sign);
}

#[test]
fn test_main() {}
