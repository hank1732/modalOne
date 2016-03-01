// test for array
        var modals = new ModalOne(['.aa', '#bb','.cc'], function (modalSearcher) {
            console.log(modalSearcher);
        });
        modals.choose('.aa');
        // console.log(modals.toString());
        modals.choose('.cc');
        // console.log(modals.toString());
        modals.choose('#bb');
        // console.log(modals.toString());
        modals.choose('#bb');
        // console.log(modals.toString());

        // error input
        // var modal2 = new ModalOne({});
        
        // test for string
        var modal3 = new ModalOne('.aa');
        modal3.choose('.aa');
        console.log(modal3.toString());
        modal3.choose('.aa');
        console.log(modal3.toString());
        modal3.choose('.aa');
        console.log(modal3.toString());

        // test for open and close
        var modal4 = new ModalOne('.aa', function (modalSearcher) {
            console.log(modalSearcher);
        });
        modal4.choose('.aa');