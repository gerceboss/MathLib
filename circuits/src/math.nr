struct Number{
    sign:bool,
    value:Field,
}
pub fn abs(a: Number) -> (Number) {
    let mut ans:Number = Number { sign: false, value: a.value };
    //sign ==true means -ve number
    ans
}

pub fn sqr_root_real(n: Number) -> (Number) {
    //scaled n is in input and scale=1000
    assert(n.sign == false);
    let mut j = 0;
    let mut flip= true;
    //let mut ans=0;
    let mut ans:Number= Number { sign: false, value: 0 };
    for i in 1..n.value {
        j= i;
        if flip {
            if (j * j) as i124 > n.value as i124 {
                //j=n.value +1;
                flip=false;
                ans.value=(j-1);
            }
        }
    }
    ans
}
pub fn sqr_root_com() {}
