const data = {
    categories: [
        {
            id: 1,
            name: 'Спецодежда',
            image: 'https://optstroy-lider.ru/image/catalog/tovari/banner/specodejda-jilet-signalni.png',
            products: [
                {
                    id: 11,
                    name: 'Сигнальный жилет',
                    image: 'https://optstroy-lider.ru/image/cache/catalog/moln-200x228.png',
                    price: 150,
                    count: 100,
                    description: ' Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                }
                ,
                {
                    id: 12,
                    name: 'Жилет детский',
                    image: 'https://optstroy-lider.ru/image/cache/catalog/deti12-200x228.jpg',
                    price: 150,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',

                },
                {
                    id: 13,
                    name: 'Зимний костюм',
                    image: 'https://optstroy-lider.ru/image/cache/catalog/2038-200x228.png',
                    price: 1750,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 14,
                    name: 'Москитная сетка',
                    image: 'https://domaster.ru/magazin/image/catalog/moskitmaterialy/polotno/moskitnaya-setka-fiberglass-seraya3.jpg',
                    price: 2150,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
            ]
        },
        {
            id: 2,
            name: 'Инструменты',
            image: 'http://moiinstrumentu.ru/wp-content/uploads/2018/05/Instrumenty-iz-Germanii.jpg',
            products: [
                {
                    id: 21,
                    name: 'Молоток Stanley',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-BYmU6CV-l55QUheEdzrYAVJ5Y4l5cyS-w&usqp=CAU',
                    price: 2150,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
            ]
        },
        {
            id: 3,
            name: 'Крепеж',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyeFhtYZnUpHIfKyKwfpnLupr8QBAQGXzQA&usqp=CAU',
            products: [
                {
                    id: 31,
                    name: 'Цанга забивная латунная М10',
                    image: 'https://static.glavsnab.net/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/f/f/ff1d7170cf2e0937f0e47b57e22ff9dd_fyhslmw_1.jpeg?kar=1&kf=1&kt=1&co=1&rgb%5B0%5D=255&rgb%5B1%5D=255&rgb%5B2%5D=255&ang=ang&qua=90',
                    price: 36,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 32,
                    name: 'Цанга латунная',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv85ar-8pQ4OVb7pavC4pzpJd-o_0CKf5HVA&usqp=CAU',
                    price: 30,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 33,
                    name: 'Дюбель-гвоздь',
                    image: 'https://www.pnevmoteh.ru/sites/pnevmoteh.ru/files/images/dyubel-gvozd_45h60.png',
                    price: 30,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 34,
                    name: 'Дюбель-распорный',
                    image: 'https://miraplastic.ru/uploads/product/100/151/dyubel-chapay.jpg',
                    price: 20,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
            ]
        }
        ,
        {
            id: 4,
            name: 'Электроинструменты',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiL9rC-3Uxn6JSQWnh9bEdZgd7i9H0zLufHg&usqp=CAU',
            products: [
                {
                    id: 41,
                    name: 'Перфоратор',
                    image: 'data:image/jpeg;base64,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',
                    price: 25000,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 42,
                    name: 'Болгарка',
                    image: 'data:image/jpeg;base64,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',
                    price: 23000,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 43,
                    name: 'Циркулярка',
                    image: 'data:image/jpeg;base64,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',
                    price: 35000,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 44,
                    name: 'шуруповерт',
                    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBUQEA8QFRUQFQ8VFhYWEA8VFRUYFxUWGBcVFRUYHSghGB0lGxcVITEiJikrLi4uGB8zODMtNyotLisBCgoKDg0OGxAQGy0lICYvLS04LzA1LzIrLy0wLTUuLTc1Ly0wNzUtNi8tLS0tLTAwLTU1LS0tLS8tLy0tNS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcDCAL/xABCEAACAgECAwUFBAgEBQUBAAABAgADEQQSBSExBhNBUXEHImGBoTJCkbEUM1JicoKS0SNzssEkQ6Lw8Rdjs8LhFf/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQECAwYH/8QANBEAAgECAwQJBAEEAwAAAAAAAAECAxEEITESQVFxBRNhgZGhscHwFCIy4dEVYsLxIzNC/9oADAMBAAIRAxEAPwDuMREAiJMQCIkxAIkxIgExIiATEiIBMSIgExIkwBERAEREAREx9Vqa6kL22IijGWdlVR6seQgGRE8aL0sUMjqynoVYMD6ET2gCIiAIiIAiREASZEmAIiIAiIgCIiAIkTW8U43o9KM6nVUVY5+/ain5AnJ+UA2cSk6z2ocKrBK2XWY/ZosXPo1uwfWV/W+2vTr+q0djfx3Iv/xiyAdWicq/9ZNM2AmmtUkDrhsnyTZk+mQPlLdw3jB1dW9GbHNWVk2OrfeR1IyrDylfi+kYYaWzKMm+xZeN/Y6wouSumjeNr6um7PyM/B4knk34f/s1Qpx0/CQ1zeCH8DKP+s4p6qK5Jv3JSw0NxtbeK0Iu532j45lK7Z+1LS6A1pUgvezdn/FNaIBjmW2tknPTHgckcs7u0WOCrVqVYYIYKQR5EHrPLT8JRcbNPp0x02VIMemBO1Lpqs3nC67E4+bb9DDw0ba+ft+zScM9po1VWV0l6sR1QpcD6bMkH1Wbvh3E7rl3HvlB8HR0Prg4P0mV+iv42Aegn6/RR4u5+YEgYuviMTPbW1Ds28vK3nfwyOtOMIRtk+2xk1axlGA+715/XMqPtC7P3cSqXFzbqSzpUQorYkY69Q2MgEkjmRyyTLKumQc8H5kzxuRxctgf3NjK6luWcgq6jz+0D8p0hisVTs+stbddtd91n80eZq6dNvQ4hwm7V6J91Nllbg4OCQeXgy9Gx5MCJ0Dsz7U2BFfEUUA4HfICMfGxPH1X8JtOOdn9DqHNnfmt8Ev3bpzHizKQcevL4ysHs3wy/wB3S8RR7B0DPS4Pw90Aj15+kvo9LYfLbun8+adxG+lqbkdmrsDAMpBDAEEEEEHoQfET0lO9netZaToLgVt0mQAee6snKlT4gZA9NvnLhLJNSV1oR7WJiREyBERAEmRJgCIiAImm7Qcep0SbrMszBilalN77eu0MQOWR+Pylav0XE+LVf4tjaOiwcq6z/iMp6b7OvMeAwIBtOJe0HhVDFH1QZlJBFddtmCDgjcilc5BGMzUX+1XR/wDK02rf4lakU/Mvn6Sh8d7MDhloqdjYgwQ2MMUIIBwPJhjHw+U1T2V9RXaR1GBUB81sOYBceP8AtO1dlNiafT10sykB+/L2LnxUbAA2OnXBnIrNFdW3f2h3QtmxmO58E82LdT1zzlmbWAH3ah6984P9KjBn4PEqijrZWgJBGRj3lb49fkc+EAhuCVDDFsIQCCq7ic9DnB5Y+E96tDp/Cq9/kVH1KiaXhPGyta1kj3cqPLAOB9MTZWcWpHXUZP7tbH6nAgGZZowAP+FWtdy5Jest155C59OsvPY/iVFNldSBV73KMoTAJA9xy27mTgjp9/4Ccxs7Q6fpjUsfialH+5nrpuM2VnKvcB/w9/drUXazY4dVYAjbg88+vXoY2MgpUZL+dd2ie/PTnZXOlN2kfQdtnLkMnyzjM8BqbT0oPzIEwf0vlyPpNdx/jllFD2IodwagFZiq5exEySAeQ3Z+U8PHFKrJJXTdlu90y16rYTbXr7FgLaj9mtfVv7TV8Q48KtTTo2Qk6tLSHz7nuY3Dzz7wlS4jxrilDVPadEa2uoRwlV4YJZYEJBaw5IyPCZfax8W8Pu8V1T15+D0uSPoPwE6da8s9U873ztktFvs/Ayqedmvnizf8N4Tp9IWNCV1l+TFVcs2P2mZjmZzXDxsc/wBA/ISmdte0F+kCdytRLtYCbG2gBKzYcHpnCkc/hKpr+2OrdQ2m73m1Ne1hVnfqKS9W0qi4AbAPM5z4cs4hTxNZKaaSe9t8bZ3e95czMnFO0s3y7zrJsT94+rufoTPz36D7ij+UTjdHHtY9lLub+7Z2ssrLOQK3sFSKQzZyu2x+Q8RnlzGf2W0llmo0t1lOpDV12LYTyQ2Dbsswpxgqzcz5ek2qYGrTi5Tna19EtVfLVcNe1chGpGVkl84nQXbGuDhMi2oBnNle3l90JuyWIC89p5DqJiniunVylPB7bGQsnuaKtRkHacWWkDHLrPDVgHXaf9TkJqD7z296FOBlEB2kZ6kjl4TYtdxN2YVjTVgFgr2W22tgHkxrXaOmOW6R07tN8Fw4td/6tY6yWRmcBvsOpott05oe0XUGssrkLsNyZZeRwan6ftYl7lG7N03NqkF9wuehXud1UIoLg11AL4DB1H4DrmXmez6Lv9Mubtyv25lPiv8Asfd6CIiWJHEREASYiAJianWpWQpyWYEhVBLH448B8TgfGZc0PHeDWXvvS0rlFQgWWV9GLAhk588kEfAQCp9vtLVe9Vmu0lj0bgjCsWl612sQ7unuEb8e57w6HPKYPAPaB+j6erTNW9hrFiJbkneiWOtefHPdis/zCZvGOFajTPWXQujNlrG11hqqC8y1osAyPgM/KYnZXRJcupZERq11l61smChUU6dSVI5YJU/WAU72i9q79RZWzV7UTcoOP2iCQT49PzlObi7cwAORxlra05/ANOme1PRKNEq7ME3145eSWZ5zlG3B5WAHxw2CfUZgHq+tuboa8HyW5/qq4z6TE1NjH7dp9Nla/wCpwfmRPZqS3Pa7Hz2ufrifk8NduRUqPjgfh/34wDX1H3M/vv8AULP3u5f+Zk6TRFlKjqHYH5Af3mQvB28fzEA1bMcTaa8AX2gWtWhDqWAZsgAMEwOeCyqPh6Ce9fAz1OPxM3vCuEi5tjU97lVqB5hVLnartgc/EDp9JzqtKDb9v8sstczMVd/PbM6voyTUh80r/wBIml7cHHD9ST07lvxOAPriWxNKqjHgAAPQTzdVPIVOR8cAGfPaUHTqRm9zTtv1L2TvFo4zdf8ApNfC662Ntlb1Gzad7J7y5NmMlfn5GdA7Srut0FPi2rezHwSlwT+LD8ZaEVsYFaKP4sj8BK92i7QaOm1Qau9voBAK4UVlgCRv5kZ5cgD4Zk9xqYqUY046bWWf/p3vdpWSbX+2ck40ruT4eWXmYfG0r1V7UWaelxQyHdbcyLliikqAvMqGJ6j7JxPHUaIq42DSOHLbz3FtrAK2A29nIYkBsDHivPB5YFnbzcWKaWhT4l2e3n8cbD5fiJh39udWeVbVp/lUp+ThpcUsA9hQVFaWvKba7clda56W52Isq9pNub7or11LA/DtSTim7UBcD9VptMgz72TkrkD7JA59Dz58vTUdnr7AMtqlGRud9bYfd55Hdghc9OfwPLnyous7U8RfrbqPlY1f0rxNRfq9RaQW97H7RLnx8Tk+Xj4SRSwFSFtlU49qjeXnb07jnKvFvPafN5eR1663T16o3WavSKBUK0RmoFinJJbdzY9fs5xy+M13DirWirTXavX3t+3baunT9+w8lCj91TnkPGc3opuJG5jgkAADmSeQAA6md09mfZZtHU1967brwo2+NdY5hT+8TzPoo8JpS6Doxf3yb8FfnbN9uZtLHTf4qxYOz3BxpayC2+2w77rMY3vgDkPuqAAFXwAHxJ28RLlJJWRCEREyBERAJiIgCRJkQDB4rw2nVVNTcm5H6jLKQR0KsOYI8xNNo+zdulQ16O5FTczCt6hgE9TuU55+JIJMs8QDkPtA4dx3Uba30qWVJvIaghiWOBllOG6ZxgeJlWq7EcYsI2cPsUYA5tp0x8fesBn0PEA4VX7K+LP1bTL595e5+i1tNV2m9m3FtJg0VDUKw5tTnKHyav7R88gGfRUQD5g4X2X4kq7Bw/WEkkknTWjJPnkDE3VPYjjL9NC4/isoT/U0+hYgHBqvZ9xHO21qEPLI7x2IyM89q4/AyxcD7K06OxbXc2WIpAO3agJ5FwpJIOMjr0JnQOK6J2cWJk8sED8/oJTuOcX0lLlbtTRW3Uq9qKw9U6/SeT6Tr43blTz2b5WWTTWWaWfbnzTLLDwo2T328zYtrh5SsdqO1qaQLu3lnztRFyxxjJ8gOY6+cxm7bcK3bP0xM5xnutRt/q2Y+fSZXGOD6bVBTbWHG3KMtjDKtg8mQ8wcAyshTcKkfqYyUX2Wb8bXztcl32k+qauavgHbI6i3ujVahIJXft546jkeuOfyM5z2k1th1up5n9bb4/vYH0xOr8M7PaTTndRQqtjG7LM2PLcxJnJu1i7eIaj/ADW+uDLzomVB4qboRaWzv1vdc/XiRMWp9Utu177uTMTTVEnGQMn4/j4S3dmOB6jUAVUVO1o5svLaFPi7E4Xx69fDMrnCk3OB6T6O9muiWrh6MBzua12+OGKL/wBKLPRlaVHR+y7VMP8AG1FFefBVe0/PO0Tb6H2UaNP1mo1D/Be7RT/0lvrOhRANHwfsloNI2+nTrvHR2LWOP4Wcnb8sTeREAREQBERAEREAmIiAJEmRAEREAREQBERAEREATlPt40yGrTWEe8rXL8sKfoR9TOrTlPt2rcrpGwe7DXKzfdDMatoY+GQGx84BwPidPd2ug+6xE7T2CsL8K0xYkle/QE+S2ttHyBx8pyXUcO1GotssqptsU2ONyV2OOpwMqDL/AMT4ldwrQaXQ1d2dQqM9u7Dd3vYuVwPHLY/llL0xD6iMMPTac3K9r6JJ5vgs+/cS8JLYk5y0sXtBOI9q7lfX6hlIKmxhkeJGF/MT213aviVgKtqWAIwQion1Az9ZoguPKY6K6LqYScp1JJtq1lzvvtw4G2KxMaqSijc9nh/jL6z6Y7EsDw/Tkfsf/Y5nzJ2fK98oZtuTyOT1+fKfRPsu1gs4eE8aLbq2+bd4PlhxLshFviIgCIiAIiIAiIgCIiATERAEiTIgCIiAIiIAiIgCIiAJ+WUEYIBB8CMifqIB+QgAwAMeWOX4TlXtt7O6f9Hq1VdNaWd9sdlRVZwyMQXIHvYKDr+0Z1eVH2qaM28KuxnNZqs5eSuu4/0ljAPnXX6TChvOaopzxn8pYNUQa8c8jPMmaJxzgH6QY5jw5+Hz/v8AKds9jnFv8eyonlqaVtHlvqOx/wAQw/onF6vj/vLr7M9YatXpzn9XqFQ/w2hqj8ueYB9HxEQBERAEREAREQBERAJiIgCRJkQBERAEREAREQBERAEREATH4hpFvqspf7NqOjejAg/nMiIB8qcR070WWaezk1Tujeqkg4+HKaK7r/4/vOpe2zhXc65dQowNVWCf468K3/T3f1nMdWvj/wB/nAPIWADP9pZeybFALD9prEZRnHJHHP4DJxKqi7mUZ+0wH5f3l24YowHxyVwuPIVvtx+IJ+cA+mIiIAiIgCIiAIiIAiIgEyJMiATIkyIAiIgCIiAIiIAiIgCInjqb0rRrLHVEQFmZmCqoHMlmPID4wD2iV27ttwxRy1aP/lh7M/NQRNVrPaboUztrvbHjtRR9Tn6QDR+3isdzpW8Q9yj0ZVJ/0icX1tXu5lr9ofbn/wDp3IAhrqoDBVJyWZsbnboPAADw5+cq2tv3oAOfygGq0599T++PzWWzhepHc3A/dN78v42OfrKxRp3yCFJ2kHp6f2lg0lWwlvBh0zAPqWmzcqsPvBT+IzPSUL2X9ra9VQmksbF+nUIAT+sRRhWUnqQoGR15Z9L7AEREAREQBERAEREAmIiAJEmRAEREAREQBERAEROd9vu31ekb9Gq2vayliNxACDqzEDOPh44PPHXlVqqmlldvRb3v36W3t5LnZPaMdrkWjiHGce7V/WRkfIeM0mtLXKVvY2K3VSBsPqnT6SncG7c6e1gmoX9HdsAOG3UsfDLEe7/MPnLitn7WBnGCPsnPT09PqZ4vHY3HQqONZW/t3W7LO0ubv3FvRp0tm8M/Up/GOwdFgL6UnT2eG0k1H4Mnh/Lj0M55xTS6nTP3WqVlY5wcko480PQzvaVTC4vw7SX1NVqArKfTKnwZD1BHnO+B6Zr02us+6HbquXsvBrU5VcNCf45M+eNVWCeQntoVuXkqE/IzY8Z1J0Vz0FAxRsBtuNw6q3zExG4jrW6Uso+Puj8WxPYRkpxUo6NX8SsaabTNnou+zl1AHymW4r+8QJpdFXfY4BPeN1NasWJ8+VQLY6c+U9uJcBvprNtyWojFVztyVJOQBvYEdMZx6zR1oRmoNpN6Xazz3K9/I2UG1de/8e5naTIuWzT2FXrIZWHUFeYP0n0pwjV9/p6rsY76up8eW5QcfWfMHZGtHuFdXeF3GBnBznl4Dl1n0zwPSmmlayMbcADyAAA/KJVLVIwS1TfK1reOduTMKP2uXxmxiInU1EREAREQBERAJiIgCRJkQBERAEREAREQCs9uu0KaHSPYeuPdA6sTyVR6n6Az5d1fEr7b7L7CHsvD58cA8jjHkOQA6TunteVXNYdhtYsgBztLFQRnyPI8/wC85FruGYJ5defQc/ifP1GDImGSnOdW93dx5KLtbva2m990tyOtS6SjutfnfeeOgViqqF7zvCFVRzLMeQUDzzO39k+EvpdFVp7n3sindzLKNxJ2LnqoB2j0lW9l/ZgIP021cs24U56gdGsPmTzUHrjPM7pddZcT7iZ+OPynlunsf19X6aH4xeb/ALv1p2u/BMnYOi0tp7/Q8NVrWH+GpO3wOef8JPj8D4j0ycMuZkjQ2HkU5HzOP98j1nvXwxvE/wB/pylS5LeWP2o5p7RNDzS8Vkkb0JCk4yPdJx8c8/jKCui1Np9zT3N6VuR+OJ9E28JBHUeuP95jDg9A+3aT/Nn8pdYXpqVCiqahe2/P55kOrhadWe1teBynsdotdo7++OlBzW6Ye6uv7TK2fvH7vl4zecQ0Gr1VI0xGmoqD78Vm+587i32mwPtEmX+vRaVeis3yM/bW018u6rX+N0T85Gq9ITq1uuUUpZaX3aZXay5HSNGEIbGdu2y9LFa7B9k6tG5uLO9m0qCw2gA9dqjPM+ZM6lw7iJc7HHveB8/l4SpniPlsHoljfXBE9+EcS98ODkI4VxtKlcjkceIIzgjI5EdQROuH6RxMK/WVHldbXK/la+WS82c6uHhKForlz/ZeIiJ7RlOIiIAiIgCIiATESIBMiTIgCIiAIiIAiIgHMO0t2mbV6rSa5c02vVYjnkKyaalIyOae8u4N5k5xylP7RdkdXp1LVbtVSR7rKAbkBHLco/Wj4rz9Zu/aj3i8RDK6qhSoOGH2iwKrhvDBXH800XDe0V+jOK2ynMmp8lPiUP3fly58xKyrha1KbrYWWbd3F/jJ+zfxpZHeNSMls1Flx3r58R1Wqla6AqADaqqAOQAAwAB4TwO2lcnxz44z6nynNNN7QOIWVX3KKAK7WwhrdgqipnAyGBPNevx8Jr+13tBt1FS6fuFTv668utpICmzDAKV8QCDz6Ged/oWKbgmluTzXHNtO3Hde9siZHFU1f5yLprPaDoqyQL1P+XVdYPk+Np+Rjg3a6vW7u6GowobJbukX3TjqrH8vCcRByAfH3fyolq7DOx02uVN24aXVldud2SGxtx45xLHFdD0KGHlNOTatvyu2lokuPE0pYqU6ijZW7NdO06c3E6ieT1lv2d7Wv+CYP0mBqO0mnQfbJ5WHAStDisZfHebT7o5nBlC4eNcaj3D6tcjSKyHUN3jOA3fOtYsDKvTllScj5Zmr7F3XW2sguFbWh0GGVgtin9IUiwrgklQOvIGV/wBHRhJqrU2V3X3a5Zap/k8lK+ZJdacleMb/AD9ehY7u1lR71QpY0Um9lstszs2q/uqVK7sOvLI6/Azy0PHdS+oooTT1BNRXTeG5J/hsqs2AGbJG7HQZI5TV6vs6ivZbqNbTUbjq9wbU1V4W5dmwJtOcKF+990ch4xotfwvSPWx4g9rUqUTal7nZlTs3AldvIDAxy5TEaNOov+OLm9l5WlK0rcVklfPva3GNuUX9ztn2Lfw5G31+odizNZqQEuvyAa6a+7UPUm1zZXvAtCMx3DPvLy6GqdsOI31Vjurb6twAIGos3YW24KruG9/A5ZJPnmbXW9pKBvur0HEGGGbewNChWJsOLU94KSWfGfE8pSuP8cOsBIpFaoK0VQxb7xPUgZPOXuFoxkqS6nZUdW1FXey1om28880tLkKpK209u99LX43Prejkqj91fynpES4IgiIgCIiAIiIBMRIgEyJMiAIiIAiIgCIiAck9uNK1CvUHIFgrQk/Z3V2qwGfMqXOPEIfIzl36aw91veAIAz1GdTbXnPoFn1U6BhhgCD4EAj8JzDtx7LFv3ajhxWuw4Y0NyqsIsWzKH/lHIbljac/d5mAcq7PkHTcQU+G1h/NXasreufLUH/2k+lzj/abvQ3in9Nqb3XLVoynqorZt5I+GSPlNBnc9a2ME7sFCxyVBDM6k7QTg5xkZ8TzgHqnQfyflRM/s52ht0PeNUlbGwFD3gYrjdnoCMzWKwA5vWMY+/nps/ZB/Y+s/Wj0y2HYg1FzHmFprOfqCT18ppUpwqwcJq6e4zGTi7rU6ZwPimq1goe3XmpLhrNy01U17O5agAB3DE8ricgfd8skV7tRrtOKENeutvssW0uG1buFwtdW3YPdGXaywYHRB4TH4f2E4pdzp4Nd8Dexr+ljKDLPoPY9xl8F7NBpweu3LOP6Uwf6pypYShSd4QiuSS8zeVWctZMq1uu0jUWV06TLsoXvU0qlGcBc2IWO6tcqRgEY+1jJKjzHF7KyDRpdPTtKNmyxLCGSpalZdoGCAGbmDlmYnM6dpPYcrc9XxTUWfCuta/qxbP4Tf6D2OcEqxvotuI8bb7Mn1FZUH8JnD4eNCLUW3fPN3dxUqOdrnCuJ9odRcjVW6uta3Lk11Vlky1gtbmeeTYC3MnqeeDibv2Zdh79fqq7Njro6nWx7HXAs2HPd1/tliBnHJR154B+geH9lOG6fnToNKhH3hRXu/qIz9ZugJ3OYiIgCIiAIiIAiIgEyJMQBIkyIAiIgCIiAIiIAiIgGDruFaa4MLaKn3DBJRd39XUes1Gu7CcKvz3uhpYnGW98OcAAA2A7iMADGccpZYgFZ0PYDg1PNOHaXI55esWEehszLDRQlY21oqgeCqFH4CesQBERAEREAREQBERAEREAREQBERAJkREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/Z',
                    price: 6000,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 45,
                    name: 'Угловая дрель-шуруповерт',
                    image: 'https://instrby.ru/images/stories/virtuemart/product/compressed659e478a45406fe8d9fc2f341c72d8ca2a.jpg',
                    price: 12000,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                }
            ],
        }
        ,
        {
            id: 5,
            name: 'Скотч',
            image: 'https://stroimaks.ru/wa-data/public/shop/products/06/28/12806/images/16158/16158.970.png',
            products: [
                {
                    id: 51,
                    name: 'Скотч двухсторонний',
                    image: 'https://logard.su/upload/iblock/3b2/dvustoronniy.jpg',
                    price: 120,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                }
            ],
        },
        {
            id: 6,
            name: 'Рабочие перчатки',
            image: 'https://optstroy-lider.ru/image/catalog/slider/perchatki-banner.jpg',
            products: [
                {
                    id: 61,
                    name: 'Перчатки х/б',
                    image: 'https://stroimoll.ru/upload/iblock/694/2121468.png',
                    price: 20,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
                {
                    id: 62,
                    name: 'Перчатки прорезиненные',
                    image: 'https://haveg.ru/image/cache/catalog/perchatki-900x900.jpg',
                    price: 20,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
            ],
        },
        {
            id: 7,
            name: 'Химические Анкеры',
            image: 'https://optstroy-lider.ru/image/catalog/slider/xim-anker-banner.jpg',
            products: [],
        },
        {
            id: 8,
            name: 'Монтажный Клей',
            image: 'https://optstroy-lider.ru/image/catalog/tovari/banner/montajni-kley-cena-kupit.jpg',
            products: [
                {
                    id: 81,
                    name: 'Клей монтажный акриловый Момент',
                    image: ' https://cs.petrovich.ru/images/2098843/original-925x925-fit.jpg',
                    price: 200,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
            ],
        },
        {
            id: 9,
            name: 'Монтажная Пена',
            image: 'https://www.rusgvozdi.ru/upload/medialibrary/f01/f0155e0f9154e1c27085778525ef2793.jpg',
            products: [
                {
                    id: 91,
                    name: 'Монтажная Пена Момент',
                    image: 'https://dm.henkel-dam.com/is/image/henkel/teaser-ru-moment-pufoam-750ml-can-620x465?wid=1024&fit=fit%2C1&qlt=90&align=0%2C0&hei=768&fmt=png-alpha',
                    price: 200,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
            ],
        },
        {
            id: 10,
            name: 'Жидкие Гвозди',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD3HNE82mQuj0MEtF-EkuTIPfOImHsTol-w&usqp=CAU',
            products: [
                {
                    id: 101,
                    name: ' Клей Жидкие Гвозди',
                    image: 'https://st1.stpulscen.ru/images/product/213/175/467_big.jpg',
                    price: 200,
                    count: 100,
                    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
                },
            ],
        },
    ]
}
export default data;