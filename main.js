
	document.querySelector('.control-buttons span').onclick = function(){
		let yourName = prompt('Whats Your Name?');
		if(yourName == null || yourName ==''){
			// Set Name To User
			document.querySelector('.name span').innerHTML ='User';
			//Name Is Not Empty
		}else{
			// Set Name To Your Name
			document.querySelector('.name span').innerHTML = yourName
		}
		  // Remove Splash Secreen
		  document.querySelector('.control-buttons').remove()
	};
		// Effect Duration 	
	let duration = 1000;		
		// Select Blocks Container 	
	let blocksContainer = document.querySelector('.memory-game-blocks')		
		// Create Array From Game Blocks
	let blocks = Array.from(blocksContainer.children)		
	   // Create Range Of Keys
	let orderRange = [...Array(blocks.length).keys()];
		shuffle(orderRange)	
	
	// Add Order Css Property To Game Blocks
	blocks.forEach(function(block , index){
		block.style.order = orderRange[index];
		
		// Add Click Event
		block.addEventListener('click' , function(){
			
			// Trigger The Flip Block function 
			flipBlock(block);
			
		});
	});
	
	// Flip Block function 
	function flipBlock(selectedBlock){
		
		// Add Class is-flipped
		selectedBlock.classList.add('is-flipped');
		
		// Collect All Flipped Cardes
		let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
		
		// If Theres Two Selected Blocks
		if(allFlippedBlocks.length === 2){
			
		// Stop Clicking function
		stopClicking()
		
		// Check Matched Block function
		checkMatchedBlocks(allFlippedBlocks[0] , allFlippedBlocks[1] )
		
		};	
	};
	
	// Stop Clicking function
	function stopClicking(){
		
		// Add Class No Clicking on Main Container
		blocksContainer.classList.add('no-clicking');
		
		setTimeout(()=>{
			// Remove Class Clicking After The Duration
			blocksContainer.classList.remove('no-clicking');
		}, duration)
	};
	
	// Check Matched Block
	function checkMatchedBlocks(firstBlock , secondBlock){
		
		let triesElement = document.querySelector('.tries span');
		
		if(firstBlock.dataset.technology === secondBlock.dataset.technology){
			
			firstBlock.classList.remove('is-flipped');
			secondBlock.classList.remove('is-flipped');
			
			firstBlock.classList.add('has-match');
			secondBlock.classList.add('has-match');
			
			document.getElementById('success').play();
		}else{
			 triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

			setTimeout(()=>{
			firstBlock.classList.remove('is-flipped');
			secondBlock.classList.remove('is-flipped');
			},duration)
			
			document.getElementById('fail').play();
		}
	};
	
	
	// Shuffle function
	function  shuffle(array){
		// Settings Vars 
		let current = array.length,
			temp,
			random;
			while(current > 0){
				// Get Random Number
				random = Math.floor(Math.random() * current );
				
				// Decrease Length By One
				current--
				
				// [1] Save Current Element in Stash 
				temp = array[current]
				
				// [2] Current Element = Random Element
				array[current] = array[random];
				
				// [3] Random Element = Get Element From Stash
				array[random] = temp;
			};
	
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	