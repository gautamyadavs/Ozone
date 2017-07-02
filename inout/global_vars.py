extensions = {
	'cpp':".cpp",
	'c':'.c',
	'python2':'.py',
	'python3':'.py',
	'java':'.java',
}

output = {
	'cpp':"a.out",
	'c':"a.out",
	'python2':"code.py",
	'python3':"code.py",
	'java':"Main",
}

cmd = {
	'cpp':("g++ %s -o %s", "%s < %s"),
	'c':("gcc %s -o %s", "%s < %s"),
	'python2':('python %s', 'python %s < %s'),
	'python3':('python3 %s','python3 %s < %s'),
	'java':('javac %s', 'java Main.java < %s'),
}


cmds = {
	'cpp':("g++ %s -o %s", "%s < %s > %s"),
	'c':("gcc %s -o %s", "%s < %s > %s"),
	'python2':('python %s', 'python %s < %s > %s'),
	'python3':('python3 %s','python3 %s < %s > %s'),
	'java':('javac %s', 'java %s < %s > %s'),
}