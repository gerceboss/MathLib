struct Number{
    sign:bool,
    value:Field,
}
pub fn abs(a: Number) -> (Number) {
    let mut ans:Number = Number { sign: false, value: a.value };
    //sign ==true means -ve number
    ans
}

pub fn sqrt(n: Field) -> (Field) {
    //scaled n is in input and scale=1000
    let mut j = 0;
    let mut flip= true;
    let mut ans:Field = 0;

    for i in 1..n {
        j= i;
        if flip {
            if (j * j) as i124 > n as i124 {
                flip=false;
                ans=(j-1);
            }
        }
    }
    ans
}
pub fn sqr_root_com() {}
