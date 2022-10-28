import { Client } from "redis-om";

const client = new Client();

async function connect(){
  if(!client.isOpen()){
    await client.open('redis://default:UuczkYTTqmdbUMGjOhyza2Udd122u90U@redis-16860.c8.us-east-1-4.ec2.cloud.redislabs.com:16860');
  }
}

export async function getFeatured(){
  await connect();
  const data = await client.get('featured');
  return data;
}

export async function getNew(){
  await connect();
  const data = await client.get('new');
  return data;
}

export async function getAllProducts(){
  await connect();
  const data = await client.get('products');
  return data;
}


export async function getHeader(){
  await connect();
  const data = await client.get('header');
  const footer = await client.get('footer');
  return { data, footer};
}