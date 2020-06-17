let table= document.getElementById('tb1');
function getMessage(){
	let obXhr = new XMLHttpRequest();
	table.innerHTML = '';
	obXhr.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
	
	obXhr.send();
	
	obXhr.onreadystatechange = function(){
		if(obXhr.readyState != 4) return;
		if(obXhr.status != 200){
			alert('Сервер недоступен ' + obXhr.status + ' ' + obXhr.statusText);
			return;
		}
		
		if(obXhr.response){
			let table= document.getElementById('tb1').getElementsByTagName('tdody')[0];
			let result = JSON.parse(obXhr.response);
			  let tab;
              for(let key in result){
				  tab = document.createElement('tbody');
				tab.innerHTML =`
				   
					   <tbody>
					    <td>${result[key].name}</td>
						<td>${result[key].typeObject}</td>
						<td>${result[key].admArea}</td>
						<td>${result[key].district}</td>
						<td>${result[key].socialPrivileges}</td>
						<td>${result[key].rate}</td>
                       </tbody>
					`
				table.append(tab);
			}
		}
	}
}

getMessage();
setInterval(getMessage,5000);