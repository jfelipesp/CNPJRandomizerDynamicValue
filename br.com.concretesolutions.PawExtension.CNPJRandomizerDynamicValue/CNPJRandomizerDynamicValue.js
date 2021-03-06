(function() {
	var CNPJRandomizerDynamicValue;

	CNPJRandomizerDynamicValue = function() {
		this.evaluate = function(context) {
			var n = 9;
			var n1 = Math.round(Math.random()*n);
			var n2 = Math.round(Math.random()*n);
			var n3 = Math.round(Math.random()*n);
			var n4 = Math.round(Math.random()*n);
			var n5 = Math.round(Math.random()*n);
			var n6 = Math.round(Math.random()*n);
			var n7 = Math.round(Math.random()*n);
			var n8 = Math.round(Math.random()*n);
			var n9 = 0; // FILIAL
			var n10 = 0;// FILIAL
			var n11 = 0;// FILIAL
			var n12 = 1;// FILIAL
			
			var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
			d1 = 11 - Math.round(d1 - (Math.floor(d1/11)*11));
			if (d1>=10)
				d1 = 0;
			var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
			d2 = 11 - Math.round(d2 - (Math.floor(d2/11)*11));
			if (d2>=10)
				d2 = 0;
			if (this.format === "no")
				return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;
			else if (this.format === "yes")
				return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
			else
				return ["Choose either `yes` or `no` to apply format"];
		};
		this.title = function() {
			return "CNPJ";
		};
	};

	CNPJRandomizerDynamicValue.identifier = "br.com.concretesolutions.PawExtension.CNPJRandomizerDynamicValue";
	CNPJRandomizerDynamicValue.title = "CNPJ Randomizer Dynamic Value";
	CNPJRandomizerDynamicValue.inputs = [
		DynamicValueInput("format", "Formatted", "String")
	];

	registerDynamicValueClass(CNPJRandomizerDynamicValue);

}).call(this);
