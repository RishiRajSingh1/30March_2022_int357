<script>
    let num = 77446663;
    // Function to reverse digits of num
    function reverseDigits(num) {
        let rev_num = 0; let d=0;
        while(num > 0)
        {
            d=num%10;
            rev_num = rev_num * 10 + d;
            num = num / 10;
        }
        return rev_num;
    }
 // function call  
    console.log(reverseDigits(num));
 
</script>
