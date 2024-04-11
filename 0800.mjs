import { UUID } from "https://unpkg.com/uuidjs@^5";

$(document).ready(function() {

	let selectedNumbers = [];

	function generateUUID() {
		var uuid4 = UUID.generate();
		return uuid4
	}


	let numbers = [];
	let tariffPrices = [
		{
			"name": "Bronze",
			"monthly_price": "4.99",
			"connection_price": "0.00",
			"display_offer": false,
			"replicator": [
				{
					"name": "Inclusive Minutes (Free Calls)",
					"value": "2000",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Landline Rate after Inclusive Minutes",
					"value": "1 ppm",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Mobile Rate after Inclusive Minutes",
					"value": "N/A",
					"type": "inclusive",
					"enabled": true
				}
			],
			"memorability_text": "Bronze Tariff",
			"memorability_colour": "rgba(114, 59, 19, 1)",
			"type": "tariff",
			"enabled": true,
			"show_feature_list": true,
			"features": [
				"No Minimum Term",
				"Route to Landline"
			]
		},
		{
			"name": "Silver",
			"monthly_price": "0.99",
			"connection_price": "0.00",
			"display_offer": true,
			"offer_corner_promotion": "miscellanous/offer_badge_silver.png",
			"replicator": [
				{
					"name": "Inclusive Minutes (Free Calls)",
					"value": "4000",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Landline Rate after Inclusive Minutes",
					"value": "1 ppm",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Mobile Rate after Inclusive Minutes",
					"value": "4 ppm",
					"type": "inclusive",
					"enabled": true
				}
			],
			"show_feature_list": true,
			"features": [
				"Web Based Control",
				"Time of Day/Day of Week Routing",
				"Route to Landline and / or Mobile",
				"Voicemail to Email"
			],
			"memorability_text": "Silver Tariff",
			"memorability_colour": "rgba(159, 166, 178, 1)",
			"type": "tariff",
			"enabled": true,
			"terms": "* Silver - 99p for the first 3 months, £9.99/month thereafter."
		},
		{
			"name": "Gold",
			"monthly_price": "9.99",
			"connection_price": "0.00",
			"display_offer": true,
			"offer_corner_promotion": "miscellanous/offer_badge_gold.png",
			"replicator": [
				{
					"name": "Inclusive Minutes (Free Calls)",
					"value": "6000",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Landline Rate after Inclusive Minutes",
					"value": "1 ppm",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Mobile Rate after Inclusive Minutes",
					"value": "4 ppm",
					"type": "inclusive",
					"enabled": true
				}
			],
			"show_feature_list": true,
			"features": [
				"Web Based Control",
				"Time of Day/Day of Week Routing",
				"Route to Landline and / or Mobile",
				"Voicemail to Email",
				"++ Features"
			],
			"memorability_text": "Gold Tariff",
			"memorability_colour": "rgba(227, 160, 8, 1)",
			"type": "tariff",
			"enabled": true,
			"terms": "* Gold - £9.99 for first 3 months, £19.99/month thereafter."
		},
		{
			"name": "Platinum",
			"monthly_price": "49.99",
			"connection_price": "0.00",
			"display_offer": false,
			"show_feature_list": true,
			"features": [
				"Web Based Control",
				"Time of Day / Day of Week Routing",
				"Route to Landline and / or Mobile",
				"Voicemail to Email",
				"++++ Features"
			],
			"memorability_text": "Platinum Tariff",
			"memorability_colour": "rgba(217, 218, 231, 1)",
			"type": "tariff",
			"enabled": true,
			"replicator": [
				{
					"name": "Inclusive Minutes (Free Calls)",
					"value": "8000",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Landline Rate After Inclusive Minutes",
					"value": "1 ppm",
					"type": "inclusive",
					"enabled": true
				},
				{
					"name": "Mobile Rate After Inclusive Minutes",
					"value": "4 ppm",
					"type": "inclusive",
					"enabled": true
				}
			]
		}
	];
	let totalPrice = 0.00;

	function getIdByMembership(membershipType) {
		switch (membershipType) {
			case 'bronze':
				return "01hfs7kf4mpe9s65nc171s2e90";
			case 'silver':
				return "01hfs7kf4rmeavxdyv2qtkstza";
			case 'platinum':
				return "01hfs7kf4ynq6jyf23zsy9pjaw";
			case 'gold':
				return "01hfs7kf4t4rmctvxhmykzyys2";
			case 'standard':
				return "01hg8pnscmagsm6wgx1eapr58q";
			default:

				return '01hfs7kf4rmeavxdyv2qtkstza';
		}
	}

	function findTariffPrice(tariffName) {
		let prices = $.map(tariffPrices, function(tariff) {
			return (tariff.name.toLowerCase() === tariffName.toLowerCase()) ? parseFloat(tariff.monthly_price) : null;
		});
		return (prices.length > 0) ? prices[0] : null;

	}

	function getPrefixId(prefix) {
		switch (prefix) {
			case '0800':
				return "01hfepqw84ysmt4swz3g3drhye";
			case '0808':
				return "01hfeprf8tpcs57ank8vgk3fd5";
			case '0300':
				return "01hfepzrgh0g8xkg4f6ehgj1pa";
			case '0845':
				return "01hfepqw8m0k4es3ensnwg2qhs";
			case '0333':
				return "01hfepqw6yrvnpv0ey9bk25b4w";
			case '0870':
				return "01hfeqk8j5jqf83wvmbpdky9jr";
			case '0370':
				return "01hfeq2wrdw6fef20jhnkdfqh6";
			case '0371':
				return "01hfepvs5tgft4e9zwq2n3bzza";
			case '0871':
				return "01hfepqwa6hxesza7f76qqrmws";
			case '0333':
				return "01hfepqw6yrvnpv0ey9bk25b4w";
			case '0345':
				return "01hfepqw9z8kt9mh18hvsv02p4";
			case '0845':
				return "01hfepqw8m0k4es3ensnwg2qhs";
			case '0843':
				return "01hfeqd3n58hx61gf8mjzscteh";
			default:

				return '01hfepqw84ysmt4swz3g3drhye';
		}
	}


	function removeNumberFromBasket(number, tariff, id) {
		var checkBoxIcon = $(`#${number}icon`);
		var removeIcon = $(`#${number}icon-red`);
		var priceText = $(`#monthly-fee`);

		const price = parseFloat(findTariffPrice(tariff));
		totalPrice = (parseFloat(totalPrice) - price).toFixed(2);

		if (checkBoxIcon.length) {
			checkBoxIcon.remove();
			removeIcon.remove();

			const indexToRemove = selectedNumbers.indexOf(id);
			if (indexToRemove !== -1) {
				selectedNumbers.splice(indexToRemove, 1);
			}
			priceText.empty();
			priceText.text(`£${totalPrice}`);
		}
	}

	function numbersBasket() {

		// Select the target node
		var targetNode = document.getElementById('selected-numbers-box');

		var config = { childList: true };
		var callback = function(mutationsList, observer) {
			for (var mutation of mutationsList) {
				if (mutation.type === 'childList') {

					if ($('#selected-numbers-box').children().length > 0) {
						$('#selected-numbers-box').css('justify-content', 'start');
						$('#number-placeholder').hide();
					} else {
						$('#number-placeholder').show();
					}
				}
			}
		};

		var observer = new MutationObserver(callback);

		observer.observe(targetNode, config);
	}

	function getBadgeSrc(tariff) {
		switch (tariff) {
			case 'silver':
				return 'https://uploads-ssl.webflow.com/6511b7f54adb89dea83ef2ba/6562236fe79197d7d71b2328_pricing-plan-badge.svg';
			case 'bronze':
				return 'https://uploads-ssl.webflow.com/6511b7f54adb89dea83ef2ba/656247dcaff76e6b4c632fc0_pricing-plan-bronze-badge.svg';
			case 'platinum':
				return 'https://uploads-ssl.webflow.com/6511b7f54adb89dea83ef2ba/65624cd70c4cc472baa55b08_pricing-plan-platinum-badge.svg';
			case 'gold':
				return 'https://uploads-ssl.webflow.com/6511b7f54adb89dea83ef2ba/65624871f887c53fea5d8dc6_pricing-plan-gold-badge.svg';
			default:
				return 'https://uploads-ssl.webflow.com/6511b7f54adb89dea83ef2ba/6562236fe79197d7d71b2328_pricing-plan-badge.svg';
		}
	}

	function renderNumbers(numbers) {
		var numbersWrapper = $('#numbers-wrapper');
		numbersWrapper.empty();
		numbers.map(function(number) {
			var tariff = number.attributes.tariff;
			var badgeSrc = getBadgeSrc(tariff.toLowerCase());
			var numberElement = $('<div>', {
				class: 'number-selection_number-item',
				id: number.attributes.cli_number,
				html: `<div class="number-selection_number-item_checkbox" id="${number.attributes.cli_number}checkbox"></div>
					 <p class="text-weight-bold">${number.attributes.cli_number}</p>
					 <img class="number-selection_number-item-badge" src=${badgeSrc} />`
			});

			// Add onclick event to the created div
			numberElement.on('click', function() {
				selectNumber(number.attributes.cli_number, number.attributes.tariff, number.id)

			});

			numbersWrapper.append(numberElement);
		});
	}

	function selectNumber(number, tariff, id) {
		var currentNumber = $(`#${number}checkbox`);
		var checkBoxIcon = $(`#${number}icon`);
		var removeIcon = $(`#${number}icon-red`);
		var selectedNumbersBox = $('#selected-numbers-box');
		var priceText = $(`#monthly-fee`);


		if (checkBoxIcon.length) {
			checkBoxIcon.remove();
			removeIcon.remove();
			const indexToRemove = selectedNumbers.indexOf(id);
			if (indexToRemove !== -1) {
				selectedNumbers.splice(indexToRemove, 1);
			}

			const price = parseFloat(findTariffPrice(tariff));
			totalPrice = (parseFloat(totalPrice) - price).toFixed(2);

			priceText.empty();
			priceText.text(`£${totalPrice}`);
		} else {
			var coloredCheck = $('<div>', {
				class: 'number-selection_number-item_checkbox-colored',
				id: number + 'icon',
				html: `<img class="check-icon" src="https://uploads-ssl.webflow.com/6511b7f54adb89dea83ef2ba/65e1c9b8103930de4da1bf0e_check.svg" />`


			});

			var addNewNumber = $('<div>', {
				class: 'number-selection_box-wrapper',
				id: number + 'icon-red',
				html: ` <p class="text-weight-bold">${number}(${tariff})</p>
				 <img class="number-selection_number-item-badge" src=" https://uploads-ssl.webflow.com/6511b7f54adb89dea83ef2ba/65e1da61f89ebfa7bdfd5de3_close.svg" />`
			});

			const price = parseFloat(findTariffPrice(tariff));
			totalPrice = (parseFloat(totalPrice) + price).toFixed(2);
			addNewNumber.on('click', function() {
				removeNumberFromBasket(number, tariff, id);
			})

			quarantineNumber(id);
			selectedNumbersBox.append(addNewNumber)
			currentNumber.append(coloredCheck);
			if (!selectedNumbers.includes(id)) {
				selectedNumbers.push(id);
			}
			priceText.empty();
			priceText.text(`£${totalPrice}`);
		}
	}

	function getAccessToken() {
		return new Promise((resolve, reject) => {
			// Check if token exists and not expired
			var token = localStorage.getItem('access_token');
			var expirationTime = localStorage.getItem('token_expires_at');

			if (token && expirationTime && new Date(expirationTime) > new Date()) {
				// Token exists and is not expired, resolve with the existing token
				resolve(token);
			} else {
				// Make a request to the webhook to get the token
				$.ajax({
					url: 'https://hook.eu2.make.com/akjqugry16ya0h5ltaieil1da9f8o5rq',
					type: 'POST',
					data: {
						'website': 'telecoms'
					},
					success: function(response) {
						let parsed = JSON.parse(response);
						// Save the response as the new token in local storage
						var newToken = parsed.access_token;
						var expiresIn = parsed.expires_in;

						localStorage.setItem('access_token', newToken);
						localStorage.setItem('token_expires_at', new Date(new Date().getTime() +
							expiresIn * 1000));

						// Resolve with the new token
						resolve(newToken);
					},
					error: function(error) {
						console.error('Error fetching token from webhook:', error);
						// Reject with the error
						reject(error);
					}
				});
			}
		});
	}

	function makeApiRequest(token) {

		const id = getPrefixId('0800');
		const tariff = getIdByMembership('silver')

		$.ajax({
			url: `https://numbers.staging.wwd.ltd/api/v1/numbers?page[number]=1&page[size]=100&filter[prefix]=${id}&filter[tariff]=${tariff}`,
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token
			},
			success: function(apiResponse) {
				if (apiResponse.data && apiResponse.data.length > 0) {
					numbers = apiResponse.data.map(function(item) {
						return item;
					});
					renderNumbers(numbers);
				} else {

					let emptyText = $('<h3 class="loader-text">Our database has not shown a result for your number search. <br/> Please call our sales support team on 0333 577 0333 for full access to our available numbers</h3>');
					numbersWrapper.empty();
					numbersWrapper.append(emptyText);
				}

			},
			error: function(error) {
				console.error('Error making API request:', error);
			}
		});
	}

	(async () => {
		try {
			let token = await getAccessToken();
			makeApiRequest(token);
			getPrefixes("0800", token)
		} catch (error) {
			console.error('Error getting token:', error);
		}
	})();

	function filterPrefixDropdown(number, prefix, token) {
		var id = getPrefixId(number);
		var numbersWrapper = $('#numbers-wrapper');
		numbersWrapper.empty();
		let loader = $('<h3 class="loader-text" id="number-placeholder">Loading numbers ... </h3>');


		numbersWrapper.append(loader);
		$.ajax({
			url: `https://numbers.staging.wwd.ltd/api/v1/numbers?page[number]=1&page[size]=100&filter[prefix]=${id}&filter[suffix][suffix]=${prefix}`,
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token
			},
			success: function(apiResponse) {
				if (apiResponse.data && apiResponse.data.length > 0) {
					numbers = apiResponse.data.map(function(item) {
						return item;
					});
					renderNumbers(numbers);
				} else {

					let emptyText = $('<h3 class="loader-text">Our database has not shown a result for your number search. <br/> Please call our sales support team on 0333 577 0333 for full access to our available numbers</h3>');
					numbersWrapper.empty();
					numbersWrapper.append(emptyText);
				}


			},
			error: function(error) {
				console.error('Error making API request:', error);
			}
		});
	}

	function filterNumberDropdown(number, token) {
		var id = getPrefixId(number);
		var numbersWrapper = $('#numbers-wrapper');
		numbersWrapper.empty();
		let loader = $('<h3 class="loader-text" id="number-placeholder">Loading numbers ... </h3>');

		numbersWrapper.append(loader);
		$.ajax({
			url: `https://numbers.staging.wwd.ltd/api/v1/numbers?page[number]=1&page[size]=100&filter[prefix]=${id}`,
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token
			},
			success: function(apiResponse) {
				if (apiResponse.data && apiResponse.data.length > 0) {
					numbers = apiResponse.data.map(function(item) {
						return item;
					});
					renderNumbers(numbers);
				} else {

					let emptyText = $('<h3 class="loader-text">Our database has not shown a result for your number search. <br/> Please call our sales support team on 0333 577 0333 for full access to our available numbers</h3>');
					numbersWrapper.empty();
					numbersWrapper.append(emptyText);
				}


			},
			error: function(error) {
				console.error('Error making API request:', error);
			}
		});
	}

	function filterTariffDropdown(number, tariff, token) {
		let id = getPrefixId(number);
		let tariffId = getIdByMembership(tariff.toLowerCase());
		var numbersWrapper = $('#numbers-wrapper');
		numbersWrapper.empty();
		let loader = $('<h3 class="loader-text" id="number-placeholder">Loading numbers ... </h3>');

		numbersWrapper.append(loader);
		$.ajax({
			url: `https://numbers.staging.wwd.ltd/api/v1/numbers?page[number]=1&page[size]=100&filter[prefix][prefix]=${id}&filter[tariff]=${tariffId}`,
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token
			},
			success: function(apiResponse) {
				if (apiResponse.data && apiResponse.data.length > 0) {
					numbers = apiResponse.data.map(function(item) {
						return item;
					});
					renderNumbers(numbers);
				} else {
					let emptyText = $('<h3 class="loader-text">Our database has not shown a result for your number search. <br/> Please call our sales support team on 0333 577 0333 for full access to our available numbers</h3>');
					numbersWrapper.empty();
					numbersWrapper.append(emptyText);
				}

			},
			error: function(error) {
				console.error('Error making API request:', error);
			}
		});
	}

	function getPrefixes(number, token) {
		var dropdownElement = $('#prefix');
		dropdownElement.empty();

		$.ajax({
			url: `https://numbers.staging.wwd.ltd/api/v1/prefixes?filter[prefix]=${number}`,
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token
			},
			success: function(apiResponse) {
				const suffixes = apiResponse.data[0].attributes.suffixes;
				const suffixValues = Object.values(suffixes);
				$.each(suffixValues, function(index, suffix) {
					dropdownElement.append($('<option>', {
						value: suffix,
						text: suffix
					}));
				});


			},
			error: function(error) {
				console.error('Error making API request:', error);
			}
		});
	}

	function debounce(func, delay) {
		var timeoutId;
		return function() {
			var context = this;
			var args = arguments;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(function() {
				func.apply(context, args);
			}, delay);
		};
	}

	function searchLastFourDigits(searchVal, selectedPrefix, token) {
		let id = getPrefixId(selectedPrefix);
		var numbersWrapper = $('#numbers-wrapper');
		numbersWrapper.empty();
		let loader = $('<h3 class="loader-text" id="number-placeholder">Loading numbers ... </h3>');

		$('#number-placeholder').css('justify-self', 'center');

		numbersWrapper.append(loader);

		let apiUrl;

		if (searchVal.length > 0) {

			apiUrl = `https://numbers.staging.wwd.ltd/api/v1/numbers?page[number]=1&page[size]=100&filter[prefix]=${id}&filter[last_4]=${searchVal}`;
		} else {
			apiUrl = `https://numbers.staging.wwd.ltd/api/v1/numbers?page[number]=1&page[size]=100&filter[prefix]=${id}`;
		}


		$.ajax({
			url: apiUrl,
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token
			},
			success: function(apiResponse) {
				if (apiResponse.data && apiResponse.data.length > 0) {
					numbers = apiResponse.data.map(function(item) {
						return item;
					});
					renderNumbers(numbers);
				} else {

					let emptyText = $('<h3 class="loader-text">Our database has not shown a result for your number search. <br/> Please call our sales support team on 0333 577 0333 for full access to our available numbers</h3>');
					numbersWrapper.empty();
					numbersWrapper.append(emptyText);
				}


			},
			error: function(error) {
				console.error('Error making API request:', error);
			}
		});
	}

	async function quarantineNumber(id) {
		let uniqueId = generateUUID();
		localStorage.setItem('uuid', uniqueId);
		let quarantineData = {
			"data": {
				"type": "numbers",
				"id": `${id}`,
				"attributes": {
					"quarantine_reason": "number quarantined",
					"set_quarantine": true,
					"quarantined_by": uniqueId
				}
			}
		}

		try {
			let token = await getAccessToken();

			$.ajax({
				type: 'PATCH',
				contentType: 'application/vnd.api+json',
				url: `https://numbers.staging.wwd.ltd/api/v1/numbers/${id}/-actions/quarantine?filter[quarantinedBy][quarantinedByUlid]=${uniqueId}&filter[quarantinedBy][nullable]=true`,
				headers: {
					'Authorization': 'Bearer ' + token
				},
				data: JSON.stringify(quarantineData),
				success: function(response) {
					console.log('API response:', response);
				},
				error: function(error) {
					console.error('API error:', error);
				}
			});
		} catch (error) {
			console.error('Token retrieval error:', error);
		}
	}


	async function createAddress(address) {
		return new Promise((resolve, reject) => {
			let addressData = {
				"data": {
					"type": "addresses",
					"attributes": {
						"line_1": `${address.line}`,
						"postcode": `${address.postcode}`,
						"telephone": `${address.telephone}`,
					}
				}
			};

			try {
				getAccessToken().then(token => {
					$.ajax({
						type: 'POST',
						contentType: 'application/vnd.api+json',
						url: "https://numbers.staging.wwd.ltd/api/v1/addresses",
						headers: {
							'Authorization': 'Bearer ' + token
						},
						data: JSON.stringify(addressData),
						success: function(response) {
							console.log(response.data.id);
							resolve(response.data.id);
						},
						error: function(error) {
							console.error('API error:', error);
							reject(error);
						}
					});
				}).catch(error => {
					console.error('Token retrieval error:', error);
					reject(error);
				});
			} catch (error) {
				console.error('Token retrieval error:', error);
				reject(error);
			}
		});
	}

	async function createCompany(details, address_id) {
		return new Promise((resolve, reject) => {
			let companyDetails = {
				"data": {
					"type": "companies",
					"attributes": {
						"name": `${details.name}`,
						"firstName": `${details.firstName}`,
						"lastName": `${details.lastName}`,
						"emailAddress": `${details.email}`,
					},
					"relationships": {
						"address": {
							"data": {
								"type": "addresses",
								"id": `${address_id}`
							}
						}
					}
				}
			};

			try {
				getAccessToken().then(async token => {
					try {
						let response = await $.ajax({
							type: 'POST',
							contentType: 'application/vnd.api+json',
							url: "https://numbers.staging.wwd.ltd/api/v1/companies",
							headers: {
								'Authorization': 'Bearer ' + token
							},
							data: JSON.stringify(companyDetails)
						});
						console.log(response.data.id);
						resolve(response.data.id);
					} catch (error) {
						console.error('API error:', error);
						reject(error);
					}
				}).catch(error => {
					console.error('Token retrieval error:', error);
					reject(error);
				});
			} catch (error) {
				console.error('Token retrieval error:', error);
				reject(error);
			}
		});
	}


	$('#number-dropdown').change(async function() {

		let token = await getAccessToken();
		var selectedNumber = $(this).val();

		filterNumberDropdown(selectedNumber, token);
		getPrefixes($(this).val(), token);
	});

	$('#prefix').change(async function() {
		var selectedNumber = $('#number-dropdown').val();
		var tariffVal = $('#tariff-dropdown').val();

		let token = await getAccessToken();
		var prefixVal = $(this).val();

		filterPrefixDropdown(selectedNumber, prefixVal, token);
	});

	$('#tariff-dropdown').change(async function() {
		var selectedNumber = $('#number-dropdown').val();

		let token = await getAccessToken();
		var tariffVal = $(this).val();

		filterTariffDropdown(selectedNumber, tariffVal, token);
	});

	$('#lastFourDigits').on('input', debounce(async function() {
		var selectedPrefix = $('#number-dropdown').val();

		let token = await getAccessToken();
		var searchVal = $(this).val();

		searchLastFourDigits(searchVal, selectedPrefix, token);
	}, 500));


	$('#activate-numbers').submit(async function(event) {
			event.preventDefault();

			var fd = new FormData();
			fd.append('firstname', $('#firstname').val());
			let firstName = $('#firstname').val();
			let lastName = $('#lastname').val();
			let address = $('#address-2').val();
			let email = $('#email-2').val();
			let postcode = $('#postcode-2').val();
			let telephone = $('#targetphone').val();
			let company = $('#company-2').val();

			let companyDetails = {
					firstName,
					lastName,
					email,
					name: company
			};

			let addressDetails = {
					line: address,
					postcode,
					telephone,
			};

			try {
					let address_id = await createAddress(addressDetails);
					let company_id = await createCompany(companyDetails, address_id);
					let uuid = localStorage.getItem('uuid');

					// Array to store promises of activation requests
					let activationPromises = [];

					selectedNumbers.forEach(function(number) {
							let activationDetails = {
									"data": {
											"type": "numbers",
											"id": `${number}`,
											"attributes": {
													"purchased_by": `${uuid}`,
													"company_ulid": `${company_id}`
											}
									}
							};

							let activationPromise = new Promise(async (resolve, reject) => {
									try {
											let token = await getAccessToken();

											$.ajax({
													type: 'PATCH',
													contentType: 'application/vnd.api+json',
													accept: 'application/vnd.api+json',
													url: `https://numbers.staging.wwd.ltd/api/v1/numbers/${number}/-actions/purchase?filter[purchasedBy][purchasedByUlid]=${uuid}&filter[quarantinedBy][quarantinedByUlid]=${uuid}&filter[purchasedBy][nullable]=true`,
													headers: {
															'Authorization': 'Bearer ' + token
													},
													data: JSON.stringify(activationDetails),
													success: function(response) {
															console.log('API response activation:', response);
															resolve(response);
													},
													error: function(error) {
															console.error('API error:', error);
															reject(error);
													}
											});
									} catch (error) {
											console.error('Token retrieval error:', error);
											reject(error);
									}
							});

							activationPromises.push(activationPromise);
					});

					// Once all activation requests are complete, trigger the lead creation request
					Promise.all(activationPromises)
							.then(() => {
									// Proceed to create a new request to the CRM endpoint
									let leadData = {
									};

									$.ajax({
											type: 'POST',
											contentType: 'application/json',
											accept: 'application/json',
											url: 'https://crm5.staging.wwd.ltd/api/leads',
											headers: {
													'Authorization': 'Bearer 6|uybPytYefGLmbpBTtBzENHXteN24b4yipbm2YeeC',
													'Content-Type': 'application/json'
											},
											data: JSON.stringify(leadData),
											success: function(response) {
													console.log('New lead created:', response);
											},
											error: function(error) {
													console.error('Error creating new lead:', error);
											}
									});
							})
							.catch(error => {
									console.error('Error activating numbers:', error);
							});

			} catch (error) {
					console.error('Error creating company:', error);
			}
	});



	// On page load, fetch or refresh token and make API request
	getAccessToken();
	numbersBasket();

});

