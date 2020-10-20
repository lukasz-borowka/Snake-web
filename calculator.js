function calculate()
{
	const inp_alpha = document.querySelector("#alpha");
	const inp_fs = document.querySelector("#fs");
	const inp_radius = document.querySelector("#radius");


	if(!inp_alpha.value.length && !inp_fs.value.length && !inp_radius.value.length)
	{
		console.log("Nie wprowadzono potrzebnych danych");
	}
	else
	{
		const alpha = Number(inp_alpha.value);
		const fs = Number(inp_fs.value);
		const radius = Number(inp_radius.value);

		const sin = Math.sin(alpha * Math.PI / 180);
		console.log(sin);

		const cos = Math.cos(alpha * Math.PI / 180);
		console.log(cos);

		const g = 9.81;

		const v2 = ((sin + fs) * g * radius) / cos;
		console.log(v2);

		const v = Math.sqrt(v2);
		console.log(v);

		document.getElementById("output").innerHTML = v;
	}
}