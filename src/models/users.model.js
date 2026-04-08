import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.SchemaTypes.String,
            required: true,
            min: [3, "Ism kamida 3ta belgidan iborat bo'lishi kerak"],
        },
        age: {
            type: mongoose.SchemaTypes.Int32,
            required: true,
            min: [16, "Kamida 16 yosh bo'lishi kerak"],
        },
        email: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        username: {
            type: mongoose.SchemaTypes.String,
            required: true,
            min: [5, "Username kamida 5ta belgidan iborat bo'lishi kerak"],
            unique: true,
        },
        password: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        profile_image: {
            type: mongoose.SchemaTypes.String,
            default: null,
        },
    },
    {
        versionKey: false,
        collection: "users",
        timestamps: true
    }
);

export const User = mongoose.model("User", UserSchema);