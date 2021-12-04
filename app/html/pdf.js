$("body").on("click", "#btnExport", function () {
    html2canvas($('#pdf')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("total_overdue.pdf");
        }
    });
});