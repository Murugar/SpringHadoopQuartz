//
// Simple script that prepares the HDFS env for a Hadoop job:
//
// 1. deletes the input/output paths in HDFS (in case they exist)
// 2. copies a local resource to HDFS
//
// required params are:
// * inputPath
// * outputPath
// * localResource
importPackage(java.io);
importPackage(java.lang);


// delete job paths
System.out.println("removing existing input and output directories in HDFS...");
if (fsh.test(inputPath)) { fsh.rmr(inputPath) }
if (fsh.test(outputPath)) { fsh.rmr(outputPath) }

System.out.println("copying files to HDFS...");
// copy local resource using the streams directly (to be portable across envs)
inStream = cl.getResourceAsStream(localResource)
org.apache.hadoop.io.IOUtils.copyBytes(inStream, fs.create(inputPath), cfg)