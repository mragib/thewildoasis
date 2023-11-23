import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

export async function addAndEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  //https://nniuhtkebuozusfommpu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-11-02T17%3A09%3A33.465Z
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  console.log(newCabin.image.name);
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");
  // 1.Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //2.Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data: createData, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
  }

  if (hasImagePath) return createData;
  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (uploadError) {
    const { error: deleteError } = await supabase
      .from("cabins")
      .delete()
      .eq("id", createData.id);
    console.error(deleteError);
    throw new Error("Image is not uploaded and cabin is not created");
  }

  return createData;
}
