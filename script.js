       let count = 0;
        document.getElementById("btn").onclick = function() {
            count++;
            document.getElementById("title").innerText = count;
        }
        document.getElementById("ice").onclick = function() {
            count--;
            document.getElementById("title").innerText = count;
        }
