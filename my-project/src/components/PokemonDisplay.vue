<template>
    <div class="container">
      <div class="pokemon-section">
        <h3>Pokemons List:</h3>
        <table class="table" v-if="pokemonList">
          <thead>
            <tr>
              <th>Pokemons Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pokemon in displayedPokemonList" :key="pokemon.name" class="pokemon-item">
              <td>{{ pokemon.name }}</td>
            </tr>
          </tbody>
        </table>
        <div class="button-container">
          <button @click="getPokemons" class="btn-get-pokemon">Get Pokemons</button>
          <!-- Add a button to go back after clicking the Next Offset button and style it -->
          <div>
            <button @click="getBackOffset" v-if="nextOffset" class="btn-get-pokemon">Back Offset</button>
            <button @click="getNextOffset" v-if="nextOffset" class="btn-get-pokemon">Next Offset</button>
          </div>
        </div>
      </div>
  
      <form @submit.prevent="submitForm" class="pokemon-form">
        <div class="form-group">
          <label for="name">Pokémon Name:</label>
          <input type="text" id="name" v-model="form.name" required class="form-input">
        </div>
        <button type="submit" class="btn-submit">Submit</button>
      </form>
  
      <div class="pokemon-data" v-if="pokemonData">
        <h2>{{ pokemonData.name }}</h2>
        <img :src="pokemonData.sprites.front_default" alt="Pokemon Sprite" class="pokemon-image">
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          name: '',
        },
        pokemonData: null,
        pokemonList: null,
        offset: 5,
        limit: 5,
        nextOffset: 0,
      };
    },
    computed: {
      displayedPokemonList() {
        if (this.pokemonList) {
          return this.pokemonList.slice(0, this.offset);
        }
        return [];
      },
    },
    methods: {
      submitForm() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.form.name}`)
          .then(response => {
            this.pokemonData = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      getPokemons() {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
          .then(response => {
            this.pokemonList = response.data.results;
            this.nextOffset = this.offset + this.limit;
          })
          .catch(error => {
            console.error(error);
          });
      },
      getNextOffset() {
        this.offset += this.limit;
        this.getPokemons();
      },
      getBackOffset() {
        this.offset -= this.limit;
        this.getPokemons();
      },
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .pokemon-section {
    margin-bottom: 2rem;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dee2e6;
    background-color: #f8f9fa;
  }
  
  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  
  .table th {
    font-weight: bold;
    background-color: #007bff;
    color: #fff;
    text-align: left;
  }
  
  .table tbody tr:nth-child(even) {
    background-color: #f8f9fa;
  }
  
  .btn-get-pokemon {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .btn-get-pokemon:hover {
    background-color: #0056b3;
  }
  
  .pokemon-form {
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .form-input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .btn-submit {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #1e7e34;
  }
  
  .pokemon-data {
    text-align: center;
  }
  
  .pokemon-image {
    max-width: 200px;
    margin-top: 1rem;
  }
  
  .button-container {
    display: flex;
    justify-content: flex-end;
  }
  </style>
  