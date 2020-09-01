/*
You have a set of modules and its dependencies:
module B depends A
module C depends on A and B
module D depends on C
We can represent the modules and dependencies as objects:
*/
const createModule = (name, dependencies) => (
	{
		name: name,
		dependencies: dependencies
	}
)
const moduleA = createModule("Module A", []);
const moduleB = createModule("Module B", [moduleA]);
const moduleC = createModule("Module C", [moduleA, moduleB]);
const moduleD = createModule("Module D", [moduleB]);
const moduleE = createModule("Module E", []);

// Parte 1
// console.log(moduleC.dependencies); // o que imprime ??

// Parte 2
// write  a function that returns a list of modules to be loaded
// Keep in mind that if a module depends of another it should not be loaded first.

const sortModule = (modules) => {
	// topological sorting?
	const sorted = [];
	const visited = [];

	function topologicalSorting(module) {
		if (!visited.includes(module)) {
			visited.push(module);
			module.dependencies.forEach(topologicalSorting)
			sorted.push(module);
		}
	}
	modules.forEach(topologicalSorting);
	
	return sorted;
}

modules = [moduleD, moduleB, moduleC, moduleA, moduleE];
console.log(sortModule(modules));