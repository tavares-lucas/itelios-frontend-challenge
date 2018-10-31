// Template engine

// Infos

// OBS*** Lembrar de executar Fetch API no lugar de var dados (chamar por uma url API)


function renderTemplate(productTemplateBase, dadosProduto) {
 return productTemplateBase
 	.replace('##ID##', dadosProduto.businessId)
 	.replace('##TITLE##',  dadosProduto.name)
 	.replace('##IMAGE_URL##', dadosProduto.imageName)
 	.replace("##PRICE##",  dadosProduto.price)
 	.replace("##OLD_PRICE##",  dadosProduto.oldPrice)
	.replace("##INFO##",  dadosProduto.productInfo.paymentConditions)

}


function renderAllProducts(productTemplateBase, products) {
	var outputHTML = '' 

	for(var i = 0; i < products.length; i++ ) {
	   outputHTML += renderTemplate(productTemplateBase, products[i])
	}

	return outputHTML
}


