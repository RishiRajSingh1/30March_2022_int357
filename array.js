<script>
 
// Javascript program to count number of even
// and odd elements in an array
 
function CountingEvenOdd(arr, arr_size)
{
    var even_count = 0;
    var odd_count = 0;
 
    // loop to read all the values in the array
    for (var i = 0; i < arr_size; i++) {
         
        // checking if a number is completely
        // divisible by 2
        if (arr[i] %2 == 1)
            odd_count++;
        else
            even_count++;
    }
 
         console.log("Number of even numbers = " + even_count
        + "<br>" + "Number of odd numbers = " + odd_count);
}
 
// Driver Code
 
    var arr = [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var n = arr.length;
     
    // Function Call
    CountingEvenOdd(arr, n);
 
</script>
