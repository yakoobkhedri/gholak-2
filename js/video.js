// video
 const video1 = document.getElementById('myVideo1');
        const video2 = document.getElementById('myVideo2');
        const video3 = document.getElementById('myVideo3');
        const video4 = document.getElementById('myVideo4');
        
        // اضافه کردن event listener برای پایان ویدیوها
        video1.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        video2.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        video3.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        video4.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        function playVideo() {
            video1.play();
            video2.play();
            video3.play();
            video4.play();
        }
        
        function restartVideo() {
            video1.currentTime = 0;
            video1.play();
            video2.currentTime = 0;
            video2.play();
            video3.currentTime = 0;
            video3.play();
            video4.currentTime = 0;
            video4.play();
        }
        
        // تلاش برای پخش خودکار ویدیو پس از بارگیری صفحه
        document.addEventListener('DOMContentLoaded', function() {
            const playPromise1 = video1.play();
            const playPromise2 = video2.play();
            const playPromise3 = video3.play();
            const playPromise4 = video4.play();
            
            if (playPromise1 !== undefined) {
                playPromise1.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            }
            if (playPromise2 !== undefined) {
                playPromise2.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            }
            if (playPromise3 !== undefined) {
                playPromise3.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            }
            if (playPromise4 !== undefined) {
                playPromise4.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            }
        });