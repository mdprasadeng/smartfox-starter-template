# Goal
Starter Template for Smartfox Server Java Extension Development

## Useful links
* JDK - https://www.oracle.com/java/technologies/downloads/#jdk17-windows Any other JDK like openjdk is also fine
* Idea Intellij - https://www.jetbrains.com/idea/
* Maven Repository - https://mvnrepository.com/
* 

## Java Ecosystem
### Java Virtual Machine - JVM
Java code is written for JVM
### Java Runtime Environment - JRE
JRE implements JVM and allows Java code to run
### Java Development Kit - JDK
JDK is used to package the code

## Prerequisites
Install and configure JDK

# No IDEs

## Hello World
```bash
cd NoIDEs/helloworld
javac HelloWorld.java
java HelloWorld
```

## Hello World - Production

### Running on local
```bash
cd NoIDEs/specialhelloworld
javac -cp "./commons-lang3-3.12.0.jar" *.java
java -cp ".;commons-lang3-3.12.0.jar" SpecialHelloWorld
```
### Packaging
```bash
cd NoIDEs/specialhelloworld
javac -cp "./commons-lang3-3.12.0.jar" *.java
jar cfm SpecialHelloWorld.jar manifest.mf *.class
```
### Running on another machine
```bash
cd cd NoIDEs/specialhelloworld
java -cp "SpecialHelloWorld.jar;commons-lang3-3.12.0.jar" SpecialHelloWorld
```

# Yay IDEs

### IDEA and maven
* Explain pom.xml etc
* Source and Target
* Dependencies
* Plugins ?
* maven lifecycles

```bash
cd yayIDEs/SpecialHelloWorld
java -cp "./target/SpecialHelloWorld-1.0-SNAPSHOT.jar;../../NoIDEs/specialhelloworld/commons-lang3-3.12.0.jar" SpecialHelloWorld
```

# Smartfox 
* sfs2x.bat file
* config server.xml
* config zone's xml
